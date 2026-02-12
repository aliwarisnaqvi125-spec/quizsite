import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
    // In a real app, fetch data based on params.slug
    return (
        <article className="container py-5" style={{ maxWidth: '800px' }}>
            <Link href="/blog" style={{ textDecoration: 'underline', opacity: 0.6, fontSize: '0.9rem' }}>
                &larr; Back to Articles
            </Link>

            <header className="mb-2" style={{ marginTop: '2rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase' }}>Expert Review</span>
                <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>The Ultimate Guide for Healthy Skin</h1>
                <p style={{ opacity: 0.7 }}>By Dr. Glow • January 15, 2026</p>
            </header>


            <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p className="mb-1">
                    Achieving healthy skin isn't about using the most expensive products; it's about consistency and understanding your unique skin profile.
                </p>
                <h2 style={{ margin: '2rem 0 1rem' }}>Know Your Type</h2>
                <p className="mb-1">
                    Whether you have oily, dry, or combination skin, the basics remain the same: cleanse, moisturize, and protect.
                    However, the ingredients you choose make all the difference.
                </p>
                <div style={{ background: '#f8f9fa', padding: '2rem', borderLeft: '4px solid var(--primary)', margin: '2rem 0' }}>
                    <strong>Pro Tip:</strong> Never skip sunscreen, even on cloudy days. UV rays can penetrate clouds and glass.
                </div>
                <p className="mb-1">
                    Seasonal changes also play a huge role. In winter, opt for heavier creams. In summer, switch to gels.
                </p>
            </div>

            <div style={{ marginTop: '4rem', padding: '2rem', background: '#fdfbf7', borderRadius: '8px' }}>
                <h3>Ready to find your perfect routine?</h3>
                <p style={{ margin: '1rem 0' }}>Take our quiz to get specific product recommendations.</p>
                <Link href="/quiz" className="btn btn-primary">Take the Quiz</Link>
            </div>

        </article>
    );
}
