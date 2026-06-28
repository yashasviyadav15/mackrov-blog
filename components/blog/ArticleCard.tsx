import Link from "next/link";
import type { Post } from "@/lib/content/posts";

type ArticleCardProps = {
  post: Post;
};

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Link href={`/articles/${post.slug}`}>
      <article className="rounded-xl border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-2xl font-semibold">{post.title}</h2>

        <p className="mt-3 text-gray-600">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </article>
    </Link>
  );
}