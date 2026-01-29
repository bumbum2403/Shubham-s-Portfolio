import styles from './TechStack.module.css';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "SQL"]
    },
    {
        title: "Data Science & ML",
        skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "XGBoost", "PySpark", "KaggleHub", "Pytorch", "TensorFlow"]
    },
    {
        title: "Deep Learning & AI",
        skills: ["Hugging Face Transformers", "Ollama", "OpenAI API", "Google AI Studio/ADK"]
    },
    {
        title: "NLP & Computer Vision",
        skills: ["NLTK", "LlamaIndex", "spaCy", "YOLO", "Jellyfish", "OpenCV"]
    },
    {
        title: "Platforms & Tools",
        skills: ["Azure Databricks", "Git", "Postman", "FastAPI", "FastMCP", "Flask", "Websockets", "MongoDB"]
    },
    {
        title: "Agentic AI",
        skills: ["LangChain", "Anthropic", "Groq", "LangGraph", "Pinecone", "FAISS", "RAG", "ChromaDB", "n8n", "Google AntiGravity", "MCP servers"]
    },
    {
        title: "Deployment",
        skills: ["Github", "Github Actions"]
    }
];

export default function TechStack() {
    return (
        <section className={styles.techSection}>
            <h2 className={styles.heading}>TECHNICAL <span className="text-gradient">STACK</span></h2>
            <div className={styles.grid}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={`${styles.card} glass-card`}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillList}>
                            {category.skills.map((skill, i) => (
                                <span key={i} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
