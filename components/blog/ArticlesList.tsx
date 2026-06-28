"use client";

import { useMemo, useState } from "react";

import type { Post } from "@/lib/content/posts";
import ArticleCard from "./ArticleCard";

type Props = {
  posts: Post[];
};

export default function ArticlesList({ posts }: Props) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!query) return posts;

    return posts.filter((post) => {
      const q = query.toLowerCase();

      return (
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(q)
        )
      );
    });
  }, [posts, query]);

  return (
    <>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-10 w-full rounded-xl border border-zinc-300 bg-background px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700"
      />

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <ArticleCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </>
  );
}