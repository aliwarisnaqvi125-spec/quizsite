import Link from 'next/link';
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
          <h2 className={styles.sectionTitle}>Expert Skincare Insights</h2>
          <p>The latest in regenerative aesthetics and personalized care.</p>
        </div>

        <div className={styles.grid}>
          <ArticleCard
            title="Beyond Anti-Aging: Skin Longevity in 2026"
            excerpt="The US skincare market is pivoting from fixing damage to regional biological longevity."
            slug="skin-longevity-2026"
            category="Innovation"
            image="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
          />
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

      <section className="container mb-4 text-center">
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
