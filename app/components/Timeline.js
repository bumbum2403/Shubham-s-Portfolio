import styles from './Timeline.module.css';

const experiences = [
    {
        role: "Data Science Engineer",
        company: "V4C.AI",
        location: "Pune",
        period: "July 2025 – Present",
        details: [
            "Automated 75% of invoice verification workflow, reducing manual effort significantly.",
            "Built Vision AI document extraction pipeline and ETL workflow with Databricks.",
            "Developed POC using MCP server with Databricks Genie Spaces."
        ]
    },
    {
        role: "Agentic AI Intern",
        company: "RocketFrogAI",
        location: "Delhi",
        period: "Feb 2025 – June 2025",
        details: [
            "Built Agentic AI lead research system with Scrapy and LangGraph.",
            "Developed deep research agent to identify potential partners and clients."
        ]
    },
    {
        role: "Project Intern",
        company: "IBM",
        location: "Dehradun",
        period: "June 2024 – Aug 2024",
        details: [
            "Built POC of RNN model for freestyle rap generation using TensorFlow.",
            "Used NLTK for text-preprocessing to improve lyrical coherence."
        ]
    },
    {
        role: "UGC Marketing (Self-Employed)",
        company: "Freelance",
        location: "Dehradun",
        period: "Jan 2022 – Dec 2023",
        details: [
            "Managed influencer collaborations, growing social media presence by 70k+.",
            "Improved engagement and conversion rates by up to 60% for D2C brands."
        ]
    }
];

export default function Timeline() {
    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.heading}>WORK <span className="text-gradient">EXPERIENCE</span></h2>
            <div className={styles.timeline}>
                <div className={styles.line}></div>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.dot}></div>
                        <div className={`${styles.content} glass-card`}>
                            <span className={styles.period}>{exp.period}</span>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <h4 className={styles.company}>{exp.company} | {exp.location}</h4>
                            <ul className={styles.list}>
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
