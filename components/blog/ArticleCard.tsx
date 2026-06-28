import Link from "next/link";
import type { Post } from "@/lib/content/posts";

type ArticleCardProps = {
  post: Post;
};

export default function ArticleCard({
  post,
}: ArticleCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-md">
      <h3 className="text-2xl font-semibold">
        <Link href={`/articles/${post.slug}`}>
          {post.title}
        </Link>
      </h3>

      <p className="mt-2 text-gray-600">
        {post.description}
      </p>

      <div className="mt-4 flex gap-4 text-sm text-gray-500">
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}