import Link from 'next/link';

const BLOG_POSTS: Record<string, any> = {
    'skin-longevity-2026': {
        title: "Beyond Anti-Aging: The Rise of Skin Longevity in 2026",
        date: "February 12, 2026",
        author: "Dr. Catherine Miller",
        category: "Innovation",
        content: (
            <>
                <p className="mb-2">
                    In the United States, the conversation around skincare is undergoing a fundamental shift. We are moving away from the traditional "anti-aging" narrative—which often implies a battle against time—and towards "Skin Longevity." This new paradigm focuses on the biological age of our skin and how we can maintain its regenerative capacity indefinitely.
                </p>
                <h2 style={{ margin: '2rem 0 1rem' }}>The Power of Regenerative Aesthetics</h2>
                <p className="mb-1">
                    The biggest trend hitting American clinics this year is <strong>Exosome Therapy</strong>. Exosomes are tiny cellular messengers that carry proteins and growth factors. When applied topically after professional treatments like microneedling, they signal your skin cells to repair themselves at a pace we've never seen before.
                </p>
                <div style={{ background: 'var(--accent)', padding: '2.5rem', borderRadius: '1.5rem', borderLeft: '6px solid var(--primary)', margin: '3rem 0' }}>
                    <strong>Why it matters for USA residents:</strong> With high pollution in urban centers and varying climate extremes, American skin often faces chronic inflammation. Regenerative ingredients focus on shutting down that inflammation before it causes permanent DNA damage.
                </div>
                <h2 style={{ margin: '2rem 0 1rem' }}>NAD+ and Cellular Energy</h2>
                <p className="mb-2">
                    You might have heard of NAD+ as a supplement, but it's now entering the topical space. By supporting the skin's SIRT1 longevity pathways, NAD+ supporting serums help maintain the energy production of your mitochondria. In simpler terms: it keeps your skin cells acting "young" and vibrant, rather than just masking the signs of aging.
                </p>
                <h2 style={{ margin: '2rem 0 1rem' }}>Simplified Routines: "Skin Streaming"</h2>
                <p className="mb-2">
                    Dermatologists across the US are also advocating for "Skin Streaming"—the process of streamlining your routine to use only 3-4 multi-tasking, high-potency products. This reduces the risk of barrier disruption, which has become a major concern due to the previous "more is more" approach to active ingredients.
                </p>
            </>
        )
    },
    'winter-skincare': {
        title: "Winter Skincare Survival Guide",
        date: "January 20, 2026",
        author: "Dermatology Team",
        category: "Winter Care",
        content: (
             <>
                <p className="mb-2">
                    Dry skin? Discover the best ingredients to lock in moisture during the cold months. Winter air lacks humidity, which leads to Transepidermal Water Loss (TEWL).
                </p>
                <h2 style={{ margin: '2rem 0 1rem' }}>Ceramides are Key</h2>
                <p className="mb-2">
                    Look for products containing a 3:1:1 lipid ratio to effectively repair the skin barrier.
                </p>
            </>
        )
    }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS[params.slug] || {
        title: "Skincare Insight",
        date: "January 15, 2026",
        author: "Medical Team",
        category: "General",
        content: <p>Our team is currently preparing this expert guide. Check back soon for full details.</p>
    };

    return (
        <article className="container py-5" style={{ maxWidth: '800px' }}>
            <Link href="/blog" style={{ textDecoration: 'underline', opacity: 0.6, fontSize: '0.9rem' }}>
                &larr; Back to Articles
            </Link>

            <header className="mb-2" style={{ marginTop: '2rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                    {post.category}
                </span>
                <h1 style={{ fontSize: '3.5rem', margin: '1rem 0', lineHeight: '1.1' }}>{post.title}</h1>
                <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>By {post.author} • {post.date}</p>
            </header>

            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--secondary)', marginTop: '3rem' }}>
                {post.content}
            </div>

            <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--foreground)', color: 'white', borderRadius: '2rem' }}>
                <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Ready to optimize your longevity?</h3>
                <p style={{ margin: '1rem 0', opacity: 0.8, fontSize: '1.1rem' }}>Take our clinical skin quiz to get a personalized routine built for your biological skin age.</p>
                <Link href="/quiz" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Start Personalized Quiz</Link>
            </div>

        </article>
    );
}
