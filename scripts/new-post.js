const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

rl.question("Article title: ", (title) => {
  const slug = slugify(title);

  const dir = path.join(__dirname, "..", "content", slug);

  if (fs.existsSync(dir)) {
    console.log("Article already exists.");
    rl.close();
    return;
  }

  fs.mkdirSync(dir, { recursive: true });

  const today = new Date().toISOString().split("T")[0];

  const mdx = `---
title: ${title}
description:
date: ${today}
tags:
  - General
cover: hero.png
published: false
---

# ${title}

`;

  fs.writeFileSync(path.join(dir, "index.mdx"), mdx);

  console.log(`Created ${slug}`);

  rl.close();
});