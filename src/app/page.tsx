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
            title="USA Climate Skincare Map"
            excerpt="From the humid South to the dry Desert: how to adapt your routine for every US region."
            slug="usa-climate-skincare"
            category="Regional Care"
            image="https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=800&q=80"
          />
          <ArticleCard
            title="The New US Sunscreen Standards"
            excerpt="FDA updates and the latest American-made mineral filters protecting your skin in 2026."
            slug="us-sunscreen-standards"
            category="SPF Alert"
            image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80"
          />
          <ArticleCard
            title="Metropolitan Stress & Aging"
            excerpt="How air quality in major US cities like NYC and Chicago impacts your skin's biological age."
            slug="city-stress-aging"
            category="Urban Living"
            image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
          />
          <ArticleCard
            title="Beyond Anti-Aging: Skin Longevity"
            excerpt="The US skincare market is pivoting from fixing damage to regional biological longevity."
            slug="skin-longevity-2026"
            category="Innovation"
            image="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
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
