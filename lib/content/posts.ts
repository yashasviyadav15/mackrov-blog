import fs from "node:fs";
import path from "node:path";

import fg from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_PATH = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  published: boolean;
  readingTime: string;
};

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

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags,
      cover: data.cover,
      published: data.published,
      readingTime: readingTime(content).text,
    };
  });
}