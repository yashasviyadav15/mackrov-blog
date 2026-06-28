import { getAllPosts } from "@/lib/content/posts";
import ArticleCard from "@/components/blog/ArticleCard";
import Hero from "@/components/blog/Hero";
import ArticlesList from "@/components/blog/ArticlesList";
export default function Home() {
  const posts = getAllPosts();

  return (
    <>
     <Hero />


      <section>
        <h2 className="mb-8 text-2xl font-semibold">
          Latest Articles
        </h2>

        <div className="space-y-6">
        <div className="space-y-6">
        <ArticlesList posts={posts} />
</div>
        </div>
      </section>
    </>
  );
}