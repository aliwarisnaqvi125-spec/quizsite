import Link from 'next/link';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    image?: string; // Optional image URL
}

export default function ArticleCard({ title, excerpt, slug, category, image }: ArticleCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.media} style={{ backgroundColor: '#e9ecef' }}>
                {/* Placeholder for image if not present */}
                {image && <img src={image} alt={title} className={styles.image} />}
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <Link href={`/blog/${slug}`} className={styles.readMore}>Read Article &rarr;</Link>
            </div>
        </article>
    );
}
