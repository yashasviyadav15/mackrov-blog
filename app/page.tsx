import { getAllPosts } from "@/lib/content/posts";
import ArticleCard from "@/components/blog/ArticleCard";
export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-20">
        <h1 className="text-5xl font-bold tracking-tight">
          Engineering Notes
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Thoughts on React, JavaScript, Frontend Engineering, and
          building software.
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-semibold">
          Latest Articles
        </h2>

        <div className="space-y-6">
        <div className="space-y-6">
  {posts.map((post) => (
    <ArticleCard
      key={post.slug}
      post={post}
    />
  ))}
</div>
        </div>
      </section>
    </>
  );
}