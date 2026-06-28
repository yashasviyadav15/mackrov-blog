import fs from "node:fs";
import path from "node:path";

import fg from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_PATH = path.join(process.cwd(), "content");

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    cover: string;
    published: boolean;
    readingTime: string;
  }
  interface Frontmatter {
    title: string;
    description: string;
    date: string | Date;
    tags: string[];
    cover: string;
    published: boolean;
  }
export function getAllPosts() {
  const files = fg.sync("**/index.mdx", {
    cwd: CONTENT_PATH,
  });

  return files.map((file) => {
    const slug = file.replace("/index.mdx", "");

    const source = fs.readFileSync(
      path.join(CONTENT_PATH, file),
      "utf8"
    );

    const { data, content } = matter(source);

    const frontmatter = data as Frontmatter;
        return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: new Date(frontmatter.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      tags: frontmatter.tags,
      cover: frontmatter.cover,
      published: frontmatter.published,
      readingTime: readingTime(content).text,
    };
  }) .filter((post) => post.published)  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );;
}

export function getPostBySlug(slug: string): Post | undefined {
    return getAllPosts().find((post) => post.slug === slug);
  }

  export function getPostContent(slug: string) {
    const filePath = path.join(CONTENT_PATH, slug, "index.mdx");
  
    return fs.readFileSync(filePath, "utf8");
  }