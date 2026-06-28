import Link from "next/link";
import type { Post } from "@/lib/content/posts";
import Image from "next/image";
type Props = {
  post: Post;
};

export default function ArticleCard({ post }: Props) {
  return (
    <Link href={`/articles/${post.slug}`}>
        
      <article className="group rounded-2xl border border-zinc-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl">
      {post.cover && (
  <div className="mb-6 overflow-hidden rounded-xl">
    <Image
    src={`/images/articles/${post.slug}/${post.cover}`}
      alt={post.title}
      width={1200}
      height={630}
      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
)}
        <div className="mb-4">
        <span
  className="
    inline-flex
    items-center
    rounded-full
    bg-zinc-100
    px-3
    py-1
    text-xs
    font-medium
    text-zinc-700
    dark:bg-zinc-800
    dark:text-zinc-200
  "
>
  {post.tags[0]}
</span>
        </div>

        <h2 className="text-3xl font-bold transition-colors group-hover:text-blue-600">
          {post.title}
        </h2>

        <p className="mt-4 text-zinc-600">
          {post.description}
        </p>

        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </article>
    </Link>
  );
}