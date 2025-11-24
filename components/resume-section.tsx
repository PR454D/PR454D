import React from "react"

interface ResumeSectionProps {
    title: string
    children: React.ReactNode
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary border-b border-border pb-2">
                {title}
            </h2>
            <div className="space-y-6">{children}</div>
        </section>
    )
}

interface ResumeItemProps {
    title: string
    subtitle?: string
    date?: string
    description?: React.ReactNode
    children?: React.ReactNode
}

export function ResumeItem({ title, subtitle, date, description, children }: ResumeItemProps) {
    return (
        <div className="mb-6 break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                {date && <span className="text-sm text-muted-foreground font-mono">{date}</span>}
            </div>
            {subtitle && <div className="text-lg text-primary mb-2">{subtitle}</div>}
            {description && <div className="text-muted-foreground mb-2">{description}</div>}
            {children}
        </div>
    )
}
