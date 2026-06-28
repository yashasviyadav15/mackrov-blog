import { notFound } from "next/navigation";
import Link from "next/link";
import TableOfContents from "@/components/blog/TableOfContents";
import MDXContent from "@/components/blog/MDXContent";
import {
  getPostBySlug,
  getPostContent,
} from "@/lib/content/posts";
import type { Metadata } from "next";
import ReadingProgress from "@/components/blog/ReadingProgress";
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
    <>
    <ReadingProgress />
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_1fr]">
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <TableOfContents headings={post.headings} />
      </div>
    </aside>
    <article className="mx-auto max-w-3xl">
        <Link
  href="/"
  className="mb-8 inline-flex text-sm text-gray-500 hover:text-black"
>
  ← Back to Articles
</Link>
<div className="mb-8 lg:hidden">
  <TableOfContents headings={post.headings} />
</div>
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
    </div>
    </>
  );
}