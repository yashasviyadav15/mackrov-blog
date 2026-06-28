@AGENTS.md
# AI_CONTEXT.md

This document provides architectural context for AI coding assistants (ChatGPT, Claude, Gemini, Cursor, Codex, etc.).

Read this file before making changes.

---

# Project Philosophy

The goal is NOT to build another blogging platform.

The goal is to create a writing-first publishing platform.

Every architectural decision should optimize for:

* simplicity
* maintainability
* fast publishing
* minimal dependencies

Avoid introducing unnecessary complexity.

If there are two solutions:

* simple
* clever

Prefer the simple solution.

---

# Core Principle

Writing articles should be effortless.

Publishing workflow:

```
npm run new-post

↓

Write MDX

↓

Add images

↓

git push

↓

Automatically deployed
```

No CMS.

No admin dashboard.

No database.

No authentication.

---

# Technology Stack

Framework

* Next.js 16

Language

* TypeScript

Styling

* Tailwind CSS v4

Content

* MDX

Deployment

* Vercel

DNS

* Cloudflare

---

# Content Architecture

Articles live here:

```
content/

article-slug/

index.mdx
```

Images live here:

```
public/images/articles/<slug>/
```

This separation is intentional.

We intentionally do NOT serve images from the content directory.

Reasons:

* simpler deployment
* native Next.js image optimization
* better caching
* no custom image API

---

# Frontmatter

Every article contains:

```yaml
title:
description:
date:
tags:
cover:
published:
```

Only frontmatter is used for metadata.

It should never be rendered inside articles.

---

# Content Pipeline

The project owns its content pipeline.

Flow:

```
MDX

↓

Gray Matter

↓

Frontmatter

↓

Post Object

↓

Reading Time

↓

Search

↓

TOC

↓

Page Rendering
```

Avoid replacing this pipeline with third-party CMS solutions.

---

# Heading Extraction

Headings are extracted internally.

A shared slugify() helper generates heading IDs.

Both the TOC and rendered headings must always use the same slug generation logic.

Never duplicate slug generation logic.

---

# Images

Convention:

```
public/images/articles/<slug>/
```

Hero image:

```
hero.png
```

Other images:

```
image-1.png
image-2.png
```

Prefer WebP for future articles.

---

# Search

Search is local.

No external search service.

Keep search client-side unless scaling becomes necessary.

---

# SEO

Required:

* Metadata
* Sitemap
* robots.txt
* Semantic HTML

Future improvements:

* OpenGraph images
* Structured Data
* Canonical URLs

---

# Performance

Prefer:

* Static generation
* Server Components
* Minimal JavaScript
* Native Next.js features

Avoid unnecessary client components.

---

# Styling

Design goals:

* minimal
* typography first
* generous whitespace
* readable
* distraction free

Avoid:

* excessive animations
* glassmorphism
* flashy UI
* decorative elements

The content should always be the focus.

---

# Dark Mode

Dark mode must remain simple.

Use next-themes.

No custom theme engine.

---

# Dependencies

Before adding a dependency ask:

1. Can this be implemented in <100 lines?
2. Will this dependency still be useful in 3 years?
3. Does it simplify the project?

If not:

Do not add it.

---

# Code Style

Prefer:

Small functions.

Pure utilities.

Reusable components.

Clear naming.

Avoid:

Large files.

Deep nesting.

Magic numbers.

Duplicated logic.

---

# Folder Responsibilities

app/

Routing.

Pages.

Metadata.

components/

Reusable UI.

blog/

Blog-specific components.

layout/

Layout components.

providers/

React providers.

content/

Articles only.

No images.

lib/

Business logic.

Utilities.

Content parsing.

scripts/

Developer automation.

---

# Things NOT to Add

Unless there is a strong reason:

* Prisma
* PostgreSQL
* MongoDB
* Authentication
* Admin dashboard
* Headless CMS
* Redux
* GraphQL
* Complex state management

This is intentionally a static content site.

---

# Roadmap

Completed

✓ MDX

✓ Hero Images

✓ Search

✓ Reading Time

✓ TOC

✓ Reading Progress

✓ Dark Mode

✓ Responsive Design

✓ SEO

Future

* Active TOC highlighting
* RSS
* OpenGraph generation
* Analytics
* Related Articles
* Better search

---

# Important Rule

Whenever suggesting improvements, prioritize:

Writing experience

over

Developer convenience.

The project exists to publish articles—not to showcase technology.

Whenever in doubt, choose the implementation that makes writing and maintaining articles easier.

End of context.
