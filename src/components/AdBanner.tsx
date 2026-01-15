import styles from './AdBanner.module.css';

interface AdBannerProps {
    size?: 'leaderboard' | 'rectangle';
    className?: string;
}

export default function AdBanner({ size = 'rectangle', className }: AdBannerProps) {
    return (
        <div className={`${styles.adContainer} ${styles[size]} ${className || ''}`}>
            <span className={styles.label}>Advertisement</span>
            <div className={styles.placeholder}>
                {/* Adsterra Script will go here */}
                <p>Ad Space ({size})</p>
            </div>
        </div>
    );
}
