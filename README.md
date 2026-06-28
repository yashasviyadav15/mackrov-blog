This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Mackrov Blog

A modern, fast, MDX-powered blog built with Next.js.

**Live:** https://blog.mackrov.com

## Overview

Mackrov is a personal knowledge blog where I publish well-researched articles on topics that interest me.

The blog is intentionally broad rather than niche. Topics include:

* Technology
* Software Engineering
* Travel
* Virology
* Science
* Finance
* Sports
* Music
* Productivity
* Anything worth understanding deeply.

The guiding philosophy is:

> **Learn deeply. Explain clearly.**

---

## Tech Stack

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS v4
* MDX
* next-mdx-remote
* Gray Matter
* Reading Time
* Vercel
* Cloudflare

---

## Features

* MDX articles
* Dark mode
* Search
* Reading time
* Table of Contents
* Reading progress bar
* Responsive design
* SEO metadata
* Hero images
* Syntax highlighting
* Static generation

---

## Folder Structure

```text
app/
components/
content/
lib/
public/
scripts/
```

---

## Writing a New Article

```bash
npm run new-post
```

This creates the article structure.

Write your article in:

```
content/<slug>/index.mdx
```

Store article images in:

```
public/images/articles/<slug>/
```

Example:

```
content/
    understanding-chickenpox/
        index.mdx

public/
    images/
        articles/
            understanding-chickenpox/
                hero.png
                image1.png
```

---

## Development

```
npm install
npm run dev
```

---

## Production Build

```
npm run build
```

(Currently configured to use Webpack because of an MDX compatibility issue with Turbopack.)

---

## Deployment

Hosted on:

* Vercel
* Cloudflare DNS

Production:

https://blog.mackrov.com

---

## License

Personal project.
