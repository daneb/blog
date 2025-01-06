// analytics-processor.js
import { Octokit } from "@octokit/rest";
import fs from "fs/promises";

class AnalyticsProcessor {
  constructor(token) {
    this.octokit = new Octokit({
      auth: token,
    });
  }

  async fetchAnalyticsIssues(owner, repo) {
    const issues = await this.octokit.issues.listForRepo({
      owner,
      repo,
      labels: "analytics",
      state: "all",
      per_page: 100,
    });

    return issues.data;
  }

  parseAnalyticsData(issues) {
    const events = [];

    for (const issue of issues) {
      // Extract JSON data from issue body
      const match = issue.body.match(/```json\n([\s\S]*?)\n```/);
      if (match) {
        try {
          const data = JSON.parse(match[1]);
          events.push(...data);
        } catch (error) {
          console.error(`Failed to parse issue ${issue.number}:`, error);
        }
      }
    }

    return events;
  }

  generateMetrics(events) {
    const metrics = {
      totalPageViews: 0,
      pageViewsByPage: {},
      pageViewsByCategory: {},
      pageViewsByTemplate: {},
      pageViewsByDate: {},
      userAgents: {},
      screenSizes: {},
      timeZones: {},
      referrers: {},
      customEvents: {},
    };

    for (const event of events) {
      const date = event.timestamp.split("T")[0];
      const props = event.properties;

      if (event.eventName === "pageview") {
        metrics.totalPageViews++;

        // Page metrics
        metrics.pageViewsByPage[props.path] =
          (metrics.pageViewsByPage[props.path] || 0) + 1;

        // Category metrics
        if (props.category) {
          metrics.pageViewsByCategory[props.category] =
            (metrics.pageViewsByCategory[props.category] || 0) + 1;
        }

        // Template metrics
        if (props.template) {
          metrics.pageViewsByTemplate[props.template] =
            (metrics.pageViewsByTemplate[props.template] || 0) + 1;
        }

        // Date metrics
        metrics.pageViewsByDate[date] =
          (metrics.pageViewsByDate[date] || 0) + 1;
      } else {
        // Track custom events
        metrics.customEvents[event.eventName] =
          (metrics.customEvents[event.eventName] || 0) + 1;
      }

      // Browser/device metrics
      metrics.userAgents[props.userAgent] =
        (metrics.userAgents[props.userAgent] || 0) + 1;
      metrics.screenSizes[props.screenSize] =
        (metrics.screenSizes[props.screenSize] || 0) + 1;
      metrics.timeZones[props.timeZone] =
        (metrics.timeZones[props.timeZone] || 0) + 1;

      if (props.referrer) {
        metrics.referrers[props.referrer] =
          (metrics.referrers[props.referrer] || 0) + 1;
      }
    }

    return metrics;
  }

  async generateReport(metrics) {
    const report = [
      "# Analytics Report\n",
      `Generated: ${new Date().toISOString()}\n`,
      `## Overall Metrics`,
      `- Total Pageviews: ${metrics.totalPageViews}\n`,

      "## Top Pages",
      ...Object.entries(metrics.pageViewsByPage)
        .sort(([, a], [, b]) => b - a)
        .map(([page, views]) => `- ${page}: ${views} views`),
      "\n",

      "## Views by Category",
      ...Object.entries(metrics.pageViewsByCategory)
        .sort(([, a], [, b]) => b - a)
        .map(([category, views]) => `- ${category}: ${views} views`),
      "\n",

      "## Views by Template",
      ...Object.entries(metrics.pageViewsByTemplate)
        .sort(([, a], [, b]) => b - a)
        .map(([template, views]) => `- ${template}: ${views} views`),
      "\n",

      "## Daily Traffic",
      ...Object.entries(metrics.pageViewsByDate)
        .sort()
        .map(([date, views]) => `- ${date}: ${views} views`),
      "\n",

      "## Custom Events",
      ...Object.entries(metrics.customEvents)
        .sort(([, a], [, b]) => b - a)
        .map(([event, count]) => `- ${event}: ${count} occurrences`),
      "\n",

      "## Top Screen Sizes",
      ...Object.entries(metrics.screenSizes)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([size, count]) => `- ${size}: ${count} views`),
      "\n",

      "## Top Time Zones",
      ...Object.entries(metrics.timeZones)
        .sort(([, a], [, b]) => b - a)
        .map(([zone, count]) => `- ${zone}: ${count} views`),
      "\n",

      "## Top Referrers",
      ...Object.entries(metrics.referrers)
        .sort(([, a], [, b]) => b - a)
        .filter(([referrer]) => referrer) // Only non-empty referrers
        .map(([referrer, count]) => `- ${referrer}: ${count} views`),
    ].join("\n");

    await fs.writeFile("analytics-report.md", report);
    return report;
  }
}

// Usage example:
const processor = new AnalyticsProcessor(process.env.GITHUB_TOKEN);

async function generateAnalyticsReport() {
  try {
    const issues = await processor.fetchAnalyticsIssues("daneb", "blog");
    const events = processor.parseAnalyticsData(issues);
    const metrics = processor.generateMetrics(events);
    const report = await processor.generateReport(metrics);
    console.log("Analytics report generated successfully!");
  } catch (error) {
    console.error("Failed to generate analytics report:", error);
  }
}

generateAnalyticsReport();
