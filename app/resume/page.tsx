import { ResumeSection, ResumeItem } from "@/components/resume-section"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-bold text-foreground">Resume</h1>
                <Button asChild variant="outline">
                    <a href="/resume.pdf" download="Prasad_Sawool_Resume.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </a>
                </Button>
            </div>

            <ResumeSection title="Professional Summary">
                <p className="text-muted-foreground leading-relaxed">
                    Experienced Software Engineer with 3+ years developing scalable microservices and high-performance
                    applications. Proven expertise in designing fault-tolerant systems using Kafka and Spring Boot, with
                    demonstrated success in optimizing systems for 400K+ daily users. Strong background in both backend
                    architecture and frontend development, with a track record of improving system performance by up to 70% and
                    reducing latency by 20%.
                </p>
            </ResumeSection>

            <ResumeSection title="Experience">
                <ResumeItem
                    title="Software Engineer"
                    subtitle="Jio"
                    date="Sep 2022 – Present"
                    description="Navi Mumbai, India"
                >
                    <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                        <li>
                            Architected and maintained microservices for JioMart e-commerce platform serving 400K+ daily active users,
                            implementing caching strategies and query optimizations that reduced average response times by 20% and increased
                            throughput by 50%
                        </li>
                        <li>
                            Engineered fault-tolerant event-driven systems using Apache Kafka for real-time data processing, enabling 2x increase
                            in daily processing load with zero performance degradation
                        </li>
                        <li>
                            Redesigned backend data pipelines for near real-time synchronization across internal platforms, achieving 70%
                            improvement in data freshness and 10x throughput enhancement
                        </li>
                        <li>
                            Developed React-based finance portal frontend integrating multiple banking services, improving UI responsiveness by
                            40% and user engagement by 30%
                        </li>
                        <li>
                            Implemented containerization with Docker and Kubernetes, reducing system downtime by 30% and improving
                            deployment efficiency across distributed environments
                        </li>
                        <li>
                            Integrated third-party payment and inventory systems with 99.9% uptime, ensuring seamless transaction processing
                            for high-volume e-commerce operations
                        </li>
                    </ul>
                </ResumeItem>
            </ResumeSection>

            <ResumeSection title="Education">
                <ResumeItem
                    title="Bachelor of Technology in Electronics Engineering"
                    subtitle="K. J. Somaiya Institute of Engineering and Information Technology"
                    date="Jul 2017 – May 2022"
                    description="Mumbai, India"
                />
            </ResumeSection>

            <ResumeSection title="Technical Skills">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold mb-2">Languages</h4>
                        <p className="text-muted-foreground">Java, Kotlin, JavaScript, SQL, Python, Lua</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Backend</h4>
                        <p className="text-muted-foreground">Spring Boot, REST APIs, Microservices, Apache Kafka, Node.js</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Frontend</h4>
                        <p className="text-muted-foreground">ReactJS, Material UI, Jio Design System</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Databases</h4>
                        <p className="text-muted-foreground">MySQL, Oracle, PostgreSQL</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">DevOps & Tools</h4>
                        <p className="text-muted-foreground">Docker, Kubernetes, CI/CD, Git, Linux</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Cloud & Monitoring</h4>
                        <p className="text-muted-foreground">Performance monitoring, Distributed systems, Event-driven architecture</p>
                    </div>
                </div>
            </ResumeSection>

            <ResumeSection title="Accomplishments">
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                    <li>
                        <strong>Jio Certified Project Manager Foundation (2023):</strong> Achieved top 5% performance among all program participants,
                        demonstrating leadership and project management excellence
                    </li>
                    <li>
                        <strong>Late Namrata Bhagat Award (2019):</strong> Recognized for exceptional performance in Big Data internship at Widyaarjan
                        LLP, highlighting early technical excellence
                    </li>
                </ul>
            </ResumeSection>

            <ResumeSection title="Open Source Community">
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                    <li>
                        <strong>FOSS United Mumbai:</strong> Active organizer and speaker at monthly meetups (2023-2025), promoting open-source
                        technologies and knowledge sharing in the developer community
                    </li>
                    <li>
                        <strong>MUMBAIFOSS 2.0:</strong> Volunteer at flagship open-source conference held at IIT Bombay, contributing to community
                        building and technical education
                    </li>
                </ul>
            </ResumeSection>
        </div>
    )
}
