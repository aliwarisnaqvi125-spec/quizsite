import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navWrapper}`}>
                <Link href="/" className={styles.logo}>
                    Lumina<span>Skin</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/quiz">Skin Quiz</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/treatments">Treatments</Link>
                    <Link href="/results">Results</Link>
                    <Link href="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}
