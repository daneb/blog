// analytics.js
class Analytics {
    constructor(options = {}) {
        this.storageKey = options.storageKey || 'site_analytics';
        this.flushInterval = options.flushInterval || 60000; // 1 minute
        this.maxStorageSize = options.maxStorageSize || 500; // Max events to store
        this.githubRepo = options.githubRepo;
        this.buffer = this.loadFromStorage() || [];

        // Start periodic flushing
        setInterval(() => this.flush(), this.flushInterval);
    }

    track(eventName, properties = {}) {
        const event = {
            timestamp: new Date().toISOString(),
            eventName,
            properties: {
                ...properties,
                path: window.location.pathname,
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                language: navigator.language,
                screenSize: `${window.innerWidth}x${window.innerHeight}`,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        };

        this.buffer.push(event);

        // Prevent buffer from growing too large
        if (this.buffer.length > this.maxStorageSize) {
            this.buffer = this.buffer.slice(-this.maxStorageSize);
        }

        this.saveToStorage();
    }

    async flush() {
        if (this.buffer.length === 0) return;

        try {
            const eventsToSend = [...this.buffer];
            const issueBody = `Analytics Events:
\`\`\`json
${JSON.stringify(eventsToSend, null, 2)}
\`\`\``;

            // Create GitHub issue with analytics data
            const response = await fetch(`https://api.github.com/repos/${this.githubRepo}/issues`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${this.getGitHubToken()}`
                },
                body: JSON.stringify({
                    title: `Analytics Update ${new Date().toISOString()}`,
                    body: issueBody,
                    labels: ['analytics']
                })
            });

            if (response.ok) {
                // Clear successfully sent events
                this.buffer = this.buffer.slice(eventsToSend.length);
                this.saveToStorage();
            }
        } catch (error) {
            console.error('Failed to flush analytics:', error);
        }
    }

    loadFromStorage() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey));
        } catch {
            return null;
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.buffer));
        } catch (error) {
            console.error('Failed to save analytics to storage:', error);
        }
    }

    getGitHubToken() {
        // In practice, you'd want to handle this more securely
        return 'ANALYTICS_TOKEN';
    }
}

// Usage:
const analytics = new Analytics({
    githubRepo: 'daneb/blog',
    storageKey: 'happyfrogger_analytics'
});

// Track page views
analytics.track('pageview');

// Track custom events
analytics.track('article_read', {
    title: document.title,
    category: 'tech' // or whatever category
});