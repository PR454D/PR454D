import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About - Prasad Sawool",
  description: "Background and experience of Prasad Sawool",
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h1>

          <div className="prose space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Accomplished Software Developer with experience in microservice architecture, data pipeline engineering,
                and secure access management. Achieved 40–50% throughput improvements in financial automation, reduced
                production overhead via container efficiency, and launched workflow platforms serving diverse business
                users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Current Role</h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold">SDE 1 at JioNavi</span> (Sep 2022 – Present)
              </p>
              <ul className="space-y-3 mt-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    Improved enterprise-scale financial automation by developing high-throughput microservices for
                    transaction processing, supporting 40–50% increase in throughput for automated invoice and order
                    flows
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    Reduced product catalogue data lag from 7 days to under 5 minutes by architecting Kafka-driven, near
                    real-time synchronization pipelines
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    Improved deployment efficiency by creating memory-efficient OCI container images—reducing size from
                    600MB to 200MB—substantially lowering production memory footprint
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    Designed and implemented an SSO-based authentication service with integrated RBAC, enabling secure
                    unified access across 5+ live projects
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    Developed an integrated portal streamlining retail store launches with user-configurable email
                    alerts and robust SSO authentication for access control
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Technical Skills</h2>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <span className="font-semibold">Languages:</span> Java (8, 21), Kotlin, JavaScript, SQL, Python, Lua
                </div>
                <div>
                  <span className="font-semibold">Backend:</span> Spring Boot, REST APIs, Microservices, Apache Kafka,
                  Node.js
                </div>
                <div>
                  <span className="font-semibold">Frontend:</span> ReactJS, Angular, Material UI, Jio Design System
                </div>
                <div>
                  <span className="font-semibold">Databases:</span> MySQL, Oracle, PostgreSQL
                </div>
                <div>
                  <span className="font-semibold">DevOps & Tools:</span> Docker, Kubernetes, CI/CD, Git, Linux
                </div>
                <div>
                  <span className="font-semibold">Cloud & Monitoring:</span> AWS, Azure, OpenShift, OCI, Grafana,
                  Prometheus, Open-Telemetry, Jaegar, Zipkin
                </div>
              </div>
            </section>

            {/* Existing code sections */}
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Certifications</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold">Google Foundation of Project Management</span> – Credential
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold">Jio Certified Project Manager Foundation (2023)</span> – Top 5%
                    performance among all participants
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Open Source Community</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold">FOSS United Mumbai</span> – Active organizer and speaker at monthly
                    meetups (2023-2025), promoting open-source technologies
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold">MUMBAIFOSS 2.0</span> – Organize & volunteer at IIT Bombay
                    open-source conference
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
