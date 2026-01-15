import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>LuminaSkin</h3>
                        <p>Empowering you to achieve your healthiest glow through expert advice and seasonal care.</p>
                    </div>
                    <div className={styles.section}>
                        <h4>Quick Links</h4>
                        <a href="/quiz">Take the Quiz</a>
                        <a href="/blog">Latest Articles</a>
                        <a href="/disclaimer">Disclaimer</a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} LuminaSkin. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
