import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  date: string
  excerpt?: string
}

export function getBlogPosts(): BlogPostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null
  }

  const filePath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  const htmlContent = marked(content)

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt,
    content: htmlContent as string,
  }
}
