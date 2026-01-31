import styles from './page.module.css';
import JuicyAdsMain from '@/components/JuicyAdsMain';

export default function TreatmentsPage() {
    const doctors = [
        {
            name: 'Dr Syed Ali Shahzer Naqvi',
            specialization: 'Dermatology & Cosmetic Surgery',
            experience: '15+ Years Experience',
            description: 'Expert in advanced skincare treatments and cosmetic procedures with a focus on natural-looking results.',
            image: '/images/dr-naqvi.png'
        },
        {
            name: 'Dr Robert',
            specialization: 'Clinical Dermatology',
            experience: '12+ Years Experience',
            description: 'Specializes in treating complex skin conditions and developing personalized treatment plans.',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80'
        },
        {
            name: 'Dr Smith',
            specialization: 'Aesthetic Dermatology',
            experience: '10+ Years Experience',
            description: 'Focused on anti-aging treatments and skin rejuvenation using cutting-edge technology.',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80'
        }
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-2">
                <h1>Expert Treatments</h1>
                <p>Meet our experienced dermatologists dedicated to your skin health</p>
            </div>

            <JuicyAdsMain />

            <div className={styles.doctorGrid}>
                {doctors.map((doctor, index) => (
                    <div key={index} className={styles.doctorCard}>
                        <div className={styles.imageContainer}>
                            <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} />
                        </div>
                        <div className={styles.doctorInfo}>
                            <h2>{doctor.name}</h2>
                            <p className={styles.specialization}>{doctor.specialization}</p>
                            <p className={styles.experience}>{doctor.experience}</p>
                            <p className={styles.description}>{doctor.description}</p>
                            <button className="btn btn-primary">Book Consultation</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
