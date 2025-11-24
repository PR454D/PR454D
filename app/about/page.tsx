export const metadata = {
  title: "About - Prasad Sawool",
  description: "Background and experience of Prasad Sawool",
}

export default function About() {
  return (
    <div className="max-w-3xl w-full mx-auto px-6 py-12 md:py-16">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h1>

        <div className="prose space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm an experienced software engineer with 3+ years designing and building scalable microservices and
              high-performance applications. My expertise spans backend architecture, event-driven systems, and
              frontend development, with a proven track record of optimizing systems for 400K+ daily users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Current Role</h2>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Software Engineer at JioNavi</span> (Sep 2022 – Present)
            </p>
            <ul className="space-y-3 mt-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  Architected microservices for JioMart e-commerce platform serving 400K+ daily users, implementing
                  caching and query optimization that reduced response times by 20% and increased throughput by 50%
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  Engineered fault-tolerant event-driven systems using Apache Kafka for real-time data processing,
                  enabling 2x increase in daily processing load
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  Redesigned backend data pipelines achieving 70% improvement in data freshness and 10x throughput
                  enhancement
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  Developed React-based finance portal frontend, improving UI responsiveness by 40% and user
                  engagement by 30%
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Implemented Docker and Kubernetes containerization, reducing system downtime by 30%</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Education</h2>
            <p className="text-muted-foreground">
              <span className="font-semibold">Bachelor of Technology in Electronics Engineering</span>
            </p>
            <p className="text-sm text-muted-foreground">
              K. J. Somaiya Institute of Engineering and Information Technology, Mumbai
            </p>
            <p className="text-sm text-muted-foreground">Jul 2017 – May 2022</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Recognition</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-semibold">Jio Certified Project Manager Foundation (2023)</span> – Top 5%
                  performance among all participants
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-semibold">Late Namrata Bhagat Award (2019)</span> – Exceptional performance in
                  Big Data internship
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Community</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-semibold">FOSS United Mumbai</span> – Active organizer and speaker at monthly
                  meetups (2023-2025)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-semibold">MUMBAIFOSS 2.0</span> – Volunteer at IIT Bombay open-source
                  conference
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
