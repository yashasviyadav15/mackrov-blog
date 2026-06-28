import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import {
  getPostBySlug,
  getPostContent,
} from "@/lib/content/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const source = getPostContent(slug);

  return (
    <article className="mx-auto max-w-3xl">
        <Link
  href="/"
  className="mb-8 inline-flex text-sm text-gray-500 hover:text-black"
>
  ← Back to Articles
</Link>
      <header className="mb-14 border-b pb-8">
        <h1 className="text-5xl font-bold tracking-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
          <span>{post.date}</span>

          <span>•</span>

          <span>{post.readingTime}</span>

          <span>•</span>

          <span>{post.tags.join(", ")}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote source={source} />
      </div>
    </article>
  );
}