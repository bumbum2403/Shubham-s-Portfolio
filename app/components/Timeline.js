import styles from './Timeline.module.css';

const experiences = [
    {
        role: "AI Engineer",
        company: "Rocketfrog.AI",
        period: "January 2026 - Present",
        details: "Full-time role building next-gen AI systems and scalable architectures."
    },
    {
        role: "AI Engineer Intern",
        company: "V4C.AI",
        period: "July 2025 - December 2025",
        details: "Built RAG pipelines and optimized LLM inference for enterprise clients using FastMCP and LangGraph."
    },
    {
        role: "AI/ML Intern",
        company: "IBM",
        period: "June 2024 - July 2024",
        details: "Developed emotion detection models using NLP and deep learning techniques."
    },
    {
        role: "Freelance",
        company: "UGC Marketing",
        period: "August 2023 - Present",
        details: "Managed digital marketing campaigns and content strategy for various clients."
    }
];

export default function Timeline() {
    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.heading}>Work <span className="text-gradient">Experience</span></h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={`${styles.timelineItem} glass-card`}>
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <span className={styles.company}>{exp.company}</span>
                            <span className={styles.period}>{exp.period}</span>
                            <p className={styles.details}>{exp.details}</p>
                        </div>
                    </div>
                ))}
                <div className={styles.line}></div>
            </div>
        </section>
    );
}
