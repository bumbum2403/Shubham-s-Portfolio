import styles from './TechStack.module.css';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "SQL", "JavaScript", "R"],
        color: "#22c55e" // Green
    },
    {
        title: "Data Science & ML",
        skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "XGBoost", "PySpark", "KaggleHub"],
        color: "#a855f7" // Purple
    },
    {
        title: "Deep Learning & AI",
        skills: ["Hugging Face", "Ollama", "OpenAI API", "Google AI Studio", "TensorFlow", "PyTorch"],
        color: "#ec4899" // Pink
    },
    {
        title: "NLP & Computer Vision",
        skills: ["NLTK", "LlamaIndex", "spaCy", "YOLO", "OpenCV"],
        color: "#f97316" // Orange
    },
    {
        title: "Platforms & Tools",
        skills: ["Azure Databricks", "Git", "Postman", "FastAPI", "FastMCP", "Flask", "MongoDB"],
        color: "#06b6d4" // Cyan
    },
    {
        title: "Agentic AI",
        skills: ["LangChain", "Anthropic", "Groq", "LangGraph", "Pinecone", "FAISS", "RAG", "ChromaDB", "n8n"],
        color: "#eab308" // Yellow
    },
    {
        title: "Deployment",
        skills: ["Github", "Github Actions", "Netlify", "Vercel", "Firebase", "Docker"],
        color: "#3b82f6" // Blue
    }
];

export default function TechStack() {
    return (
        <section className={styles.techSection}>
            <h2 className={styles.heading}>My Tech <span className="text-gradient">Ecosystem</span></h2>
            <p className={styles.subHeading}>Building resilient, scalable applications with a modern stack.</p>

            <div className={styles.bentoGrid}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={styles.bentoCard} style={{ '--card-color': category.color }}>
                        <h3 className={styles.categoryTitle} style={{ color: category.color }}>
                            &lt; {category.title} /&gt;
                        </h3>
                        <ul className={styles.skillList}>
                            {category.skills.map((skill, i) => (
                                <li key={i} className={styles.skillItem}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
