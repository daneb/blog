# Adding a New Chapter

## 1. Create the markdown file

Place it in `src/books/biblical-understanding/your-slug.md`.

Front matter template:

```yaml
---
title: "Your Chapter Title"
date: 2026-01-01
category: faith
subcategory: book
chapter_number: 7
status: published
description: "One line summary."
slug: your-slug
previous_chapter: previous-slug
next_chapter: next-slug
study_resources:
- title: "Book Title"
  author: "Author Name"
  description: "Brief description."
---
```

**Slug rules:**
- Use bare slugs — no `.html` suffix, no path prefix
- Must match the filename exactly (e.g. `the-blessings.md` → `slug: the-blessings`)
- If the next chapter isn't written yet, omit `next_chapter`

## 2. Add it to book.json

In `src/books/biblical-understanding/book.json`, add the slug to the right part/position:

```json
{ "slug": "your-slug", "title": "Your Chapter Title", "description": "One line summary." }
```

The engine only renders chapters listed here. Order matters — it drives the book index.

## 3. Update the nav chain

- Previous chapter's file: add/update `next_chapter: your-slug`
- If there is a next chapter: add `previous_chapter: your-slug` to that file

## 4. Rebuild

```bash
cd ~/Repos/happyfrogger
./build.sh
```

Then commit and push both repos.
