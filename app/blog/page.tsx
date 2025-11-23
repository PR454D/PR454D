import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog - Prasad Sawool",
  description: "Thoughts on software engineering and system design",
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-border pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-muted-foreground mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {post.excerpt && <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>}
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
