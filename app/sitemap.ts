import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: "https://blog.mackrov.com",
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `https://blog.mackrov.com/articles/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}