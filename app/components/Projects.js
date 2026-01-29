import { ExternalLink, Github, Database, Music, Disc } from 'lucide-react'; // 'Disc' for pizza? Closest circle shape.
import styles from './Projects.module.css';

const projects = [
    {
        title: "Pizza AI – Agent-to-Agent MCP",
        description: "Modular A2A AI system where an LLM host orchestrates independent pizza ordering and delivery agents using Model Context Protocol (MCP).",
        tech: ["FastAPI", "MCP", "Claude Desktop"],
        icon: <Disc size={24} color="#f59e0b" />,
        link: "https://github.com/bumbum2403/Pizza-AI-A2A-MCP-"
    },
    {
        title: "Chat Spotify",
        description: "LangChain-based AI Agent interacting with Spotify’s API to manage playlists, search songs, and add tracks via natural language.",
        tech: ["LangChain", "Spotify API", "AI Agent"],
        icon: <Music size={24} color="#1db954" />,
        link: "https://github.com/bumbum2403/Spotify_Agent"
    },
    {
        title: "FastAPI ChromaDB Server",
        description: "Non-blocking API for ingesting and querying documents using ChromaDB, leveraging Hugging Face transformers for embeddings.",
        tech: ["FastAPI", "ChromaDB", "Transformers"],
        icon: <Database size={24} color="#ec4899" />,
        link: "https://github.com/bumbum2403/ChromaDB-Server"
    }
];

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.heading}>FEATURED <span className="text-gradient">PROJECTS</span></h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-card" style={{ padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.3s' }}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>{project.icon}</div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <Github size={20} />
                            </a>
                        </div>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardDesc}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tech.map((t, i) => (
                                <span key={i} className={styles.tag}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
