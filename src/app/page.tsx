import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import ArticleCard from '@/components/ArticleCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Unlock Your Natural Glow</h1>
            <p className={styles.heroSubtitle}>
              Expert skincare advice tailored to your unique needs and the changing seasons.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quiz" className="btn btn-primary">Take Skin Quiz</Link>
              <Link href="/blog" className="btn btn-outline">Read Tips</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="container py-5">
        <div className="text-center mb-2">
          <h2 className={styles.sectionTitle}>Seasonal Care Essentials</h2>
          <p>Curated tips for maintaining healthy skin year-round.</p>
        </div>

        <div className={styles.grid}>
          <ArticleCard
            title="Winter Skincare Survival Guide"
            excerpt="Dry skin? Discover the best ingredients to lock in moisture during the cold months."
            slug="winter-skincare"
            category="Winter Care"
            image="/images/blog/winter.png"
          />
          <ArticleCard
            title="Summer Glow Without the Damage"
            excerpt="How to protect your skin from UV rays while enjoying the sun safely."
            slug="summer-glow"
            category="Summer Care"
            image="/images/blog/summer.png"
          />
          <ArticleCard
            title="Top 5 Dermatologist Recommended Routines"
            excerpt="Simple, effective daily routines for every skin type, approved by experts."
            slug="derm-routines"
            category="Expert Tips"
            image="/images/blog/derm.png"
          />
        </div>
      </section>

      {/* Banner Ad */}
      <section className="container mb-2">
        <AdBanner size="leaderboard" />
      </section>

      {/* Quiz Teaser */}
      <section className={styles.quizTeaser}>
        <div className="container">
          <div className={styles.quizContent}>
            <h2>Not sure what your skin needs?</h2>
            <p>Take our comprehensive skin health quiz to get a personalized routine built just for you.</p>
            <Link href="/quiz" className="btn btn-primary">Start Personalized Quiz</Link>
          </div>
        </div>
      </section>
    </>
  );
}
