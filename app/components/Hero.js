import { Brain, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.roleTag}>Graduate AI Engineer</div>
                <h1 className={styles.title}>
                    SHUBHAM <br />
                    <span className="text-gradient">DWIVEDI</span>
                </h1>
                <p className={styles.subtitle}>
                    Building Agentic AI Systems & <br /> Scalable Data Pipelines
                </p>

                <div className={styles.buttonGroup}>
                    <button className={styles.glowBtn} aria-label="AI Engineering">
                        <Brain size={24} />
                    </button>
                    <button className={styles.glowBtn} aria-label="Systems">
                        <Cpu size={24} />
                    </button>
                    <a href="https://github.com/bumbum2403" target="_blank" rel="noopener noreferrer" className={styles.glowBtn} aria-label="GitHub">
                        <Github size={24} />
                    </a>
                </div>
            </div>

            <div className={styles.backgroundEffects}>
                {/* Abstract network or glowing orbs can go here via CSS */}
            </div>
        </section>
    );
}
