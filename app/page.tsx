import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Prasad Sawool</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Full-stack software engineer specializing in scalable microservices, Kafka-based systems, and
              high-performance backend architecture.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Currently</h2>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer at <span className="font-semibold">JioNavi</span>, architecting microservices for the
              JioMart e-commerce platform serving 400K+ daily active users. I focus on building fault-tolerant,
              event-driven systems with Apache Kafka and optimizing data pipelines.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Backend & Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spring Boot, Microservices, Apache Kafka, REST APIs, Event-driven architecture, Distributed systems,
                  Performance optimization
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Frontend & DevOps</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ReactJS, Node.js, Docker, Kubernetes, CI/CD, Git, Linux, Cloud infrastructure
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Databases</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MySQL, Oracle, PostgreSQL, Data synchronization, Query optimization
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Languages</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Java, JavaScript, SQL, Python, Lua</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              <Link href="/blog" className="hover:text-accent transition-colors">
                Blog →
              </Link>
            </h2>
            <p className="text-muted-foreground">
              Thoughts on software engineering, system design, and building scalable applications.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
