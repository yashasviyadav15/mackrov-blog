import { notFound } from "next/navigation";
import Link from "next/link";
import MDXContent from "@/components/blog/MDXContent";
import {
  getPostBySlug,
  getPostContent,
} from "@/lib/content/posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({
    params,
  }: Props): Promise<Metadata> {
    const { slug } = await params;
  
    const post = getPostBySlug(slug);
  
    if (!post) {
      return {};
    }
  
    return {
      title: post.title,
      description: post.description,
    };
  }
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
      <MDXContent source={source} />
      </div>
    </article>
  );
}