import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getBlogPosts, getBlogPost } from "@/lib/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} - Prasad Sawool`,
    description: post.excerpt || post.title,
  }
}

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24">
        <Link href="/blog" className="text-accent hover:underline mb-8 inline-flex items-center gap-1">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
            <p className="text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>

      <Footer />
    </div>
  )
}
