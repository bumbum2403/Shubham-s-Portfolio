import { Linkedin, Mail, Github } from 'lucide-react';
import styles from './Connect.module.css';

export default function Connect() {
    return (
        <footer className={styles.footer}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Let's <span className="text-gradient">Connect</span></h2>
                <p className={styles.subText}>Ready to collaborate on the next big AI innovation? Let's build something amazing together.</p>
            </div>

            <div className={styles.container}>
                {/* Left: Contact Form */}
                <div className={`${styles.formCard} glass-card`}>
                    <h3 className={styles.cardTitle}>Send a Message</h3>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Your Name" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Your Email" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea placeholder="Your Message" className={styles.textarea} rows={5}></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Launch Message
                        </button>
                    </form>
                </div>

                {/* Right: Connect Info */}
                <div className={styles.infoSection}>
                    <div className={styles.robotGraphic}>
                        {/* Simple CSS Robot or Icon */}
                        <div className={styles.robotIcon}>🤖</div>
                        <p className={styles.robotText}>"Ready to process your ideas into reality!"</p>
                    </div>

                    <div className={styles.linksList}>
                        <h3 className={styles.linksTitle}>Connect With Me</h3>

                        <a href="mailto:sd.shubham2403@gmail.com" className={styles.linkItem}>
                            <div className={styles.iconBox} style={{ background: '#ec4899' }}><Mail size={20} color="white" /></div>
                            <span>sd.shubham2403@gmail.com</span>
                        </a>

                        <a href="https://github.com/bumbum2403" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <div className={styles.iconBox} style={{ background: '#333' }}><Github size={20} color="white" /></div>
                            <span>GitHub Profile</span>
                        </a>

                        <a href="https://in.linkedin.com/in/shubham-dwivedi2403" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <div className={styles.iconBox} style={{ background: '#0a66c2' }}><Linkedin size={20} color="white" /></div>
                            <span>LinkedIn Profile</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Shubham Dwivedi. All rights reserved.
            </div>
        </footer>
    );
}
