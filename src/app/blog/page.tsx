import ArticleCard from '@/components/ArticleCard';
import AdBanner from '@/components/AdBanner';

export default function BlogPage() {
    return (
        <div className="container py-5">
            <div className="text-center mb-2">
                <h1>Latest Skincare Insights</h1>
                <p>Expert tips, seasonal guides, and product deep dives.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
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
                <ArticleCard
                    title="Understanding Your Skin Barrier"
                    excerpt="Why it's damaged and how to fix it with the right ceramides and lipids."
                    slug="skin-barrier"
                    category="Science of Skin"
                    image="/images/blog/barrier.png"
                />
                <ArticleCard
                    title="Morning vs. Night Routines"
                    excerpt="Should you use Retinol in the morning? We break down the perfect schedule."
                    slug="am-pm-routines"
                    category="Expert Tips"
                    image="/images/blog/routine.png"
                />
                {/* Ad interspersed */}
                <div style={{ gridColumn: '1 / -1', margin: '2rem 0' }}>
                    <AdBanner size="leaderboard" />
                </div>
            </div>
        </div>
    );
}
