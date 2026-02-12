import styles from './page.module.css';

export default function ResultsPage() {
    const skinTypes = [
        {
            title: 'Dull Skin',
            description: 'Lacks radiance and appears tired with uneven tone.',
            image: '/images/skin-dull.png',
            solutions: ['Vitamin C serums', 'Chemical exfoliants', 'Hydrating masks']
        },
        {
            title: 'Dry Skin',
            description: 'Characterized by flakiness, tightness, and rough texture.',
            image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80',
            solutions: ['Rich moisturizers', 'Hyaluronic acid', 'Gentle cleansers']
        },
        {
            title: 'Oily Skin',
            description: 'Excessive sebum production causing shine and enlarged pores.',
            image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80',
            solutions: ['Salicylic acid', 'Oil-free moisturizers', 'Clay masks']
        },
        {
            title: 'Perfect Skin',
            description: 'Balanced, smooth texture with natural glow and even tone.',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80',
            solutions: ['Maintain with SPF', 'Gentle routine', 'Antioxidants']
        }
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-2">
                <h1>Skin Type Gallery</h1>
                <p>Understanding different skin types and their unique care requirements.</p>
            </div>


            <div className={styles.gallery}>
                {skinTypes.map((skin, index) => (
                    <div key={index} className={styles.skinCard}>
                        <div className={styles.imageWrapper}>
                            <img src={skin.image} alt={skin.title} className={styles.skinImage} />
                        </div>
                        <div className={styles.content}>
                            <h2>{skin.title}</h2>
                            <p className={styles.description}>{skin.description}</p>
                            <div className={styles.solutions}>
                                <h4>Recommended Solutions:</h4>
                                <ul>
                                    {skin.solutions.map((solution, idx) => (
                                        <li key={idx}>{solution}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
