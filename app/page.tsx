import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Prasad Sawool - Software Engineer",
  description: "Thoughts on software engineering and system design",
}

export default function Home() {
  const posts = getBlogPosts()

  return (
    <div className="max-w-3xl w-full mx-auto px-6 py-12 md:py-16">
      <h1 className="text-4xl font-bold text-foreground mb-12">Recent Posts</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col gap-2">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground font-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {post.excerpt && <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>}
              <Link href={`/blog/${post.slug}`} className="text-sm text-primary hover:underline mt-2 inline-block">
                Read More...
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
