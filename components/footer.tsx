import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border mt-16 md:mt-24">
      <div className="max-w-3xl w-full mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-6 mb-6">
          <Link href="mailto:thc.prasads@gmail.com" className="hover:text-foreground transition-colors">
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/prasad-sawool"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Prasad Sawool. All rights reserved.</p>
      </div>
    </footer>
  )
}
