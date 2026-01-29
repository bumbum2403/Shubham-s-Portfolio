import { Linkedin, Mail } from 'lucide-react';
import styles from './Connect.module.css';

export default function Connect() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.heading}>LET'S <span className="text-gradient">CONNECT</span></h2>
                <p className={styles.text}>
                    Open to collaborations and new opportunities in Agentic AI and Data Engineering.
                </p>

                <div className={styles.buttonGroup}>
                    <a
                        href="https://in.linkedin.com/in/shubham-dwivedi2403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.connectBtn}
                    >
                        <Linkedin size={24} />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="mailto:sd.shubham2403@gmail.com"
                        className={styles.connectBtn}
                    >
                        <Mail size={24} />
                        <span>Email Me</span>
                    </a>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Shubham Dwivedi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
