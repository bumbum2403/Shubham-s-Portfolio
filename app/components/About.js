import Image from 'next/image';
import { Code, Coffee, Zap } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <div className={styles.glowRing}></div>
                    <Image
                        src="/profile.jpg"
                        alt="Shubham Dwivedi"
                        width={300}
                        height={300}
                        className={styles.profileImage}
                        priority
                    />
                </div>

                <div className={styles.bio}>
                    <h2 className={styles.heading}> <span className="text-gradient">ABOUT ME</span></h2>
                    <p className={styles.text}>
                        I am a Data Science Engineer and Agentic AI Specialist.
                        I build intelligent systems that automate workflows and solve complex problems.
                        From orchestrating multi-agent systems to optimizing data pipelines, I bridge the gap between AI research and production engineering.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <Code className={styles.icon} />
                            <span>Fluent in Algorithms</span>
                        </div>
                        <div className={styles.statItem}>
                            <Zap className={styles.icon} />
                            <span>Agentic Architect</span>
                        </div>
                        <div className={styles.statItem}>
                            <Coffee className={styles.icon} />
                            <span>Powered by Caffeine</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
