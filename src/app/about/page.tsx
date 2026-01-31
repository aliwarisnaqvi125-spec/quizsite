"use client";

import { useState } from 'react';
import styles from './page.module.css';
import JuicyAdsMain from '@/components/JuicyAdsMain';

export default function AboutPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<null | 'success' | 'error'>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        // In a real app, you would send this data to a backend or email service here
    };

    return (
        <div className="container py-5">
            <div className={styles.aboutContent}>
                <h1>About LuminaSkin</h1>
                <p>
                    LuminaSkin is dedicated to helping you achieve your best skin through science-backed advice,
                    seasonal care routines, and personalized recommendations. We believe that healthy skin is
                    a journey, not a destination.
                </p>
            </div>

            <JuicyAdsMain />

            <div className={styles.contactSection}>
                <div className={styles.contactInfo}>
                    <h2>Get in Touch</h2>
                    <p>
                        Have questions about your skincare routine or want to collaborate?
                        We'd love to hear from you.
                    </p>

                    <div className={styles.infoCard}>
                        <h3>For More Information</h3>
                        <p>Email us directly at:</p>
                        <a href="mailto:syedaliwaris125@gmail.com" className={styles.emailLink}>
                            syedaliwaris125@gmail.com
                        </a>
                    </div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h3>Contact Us</h3>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message (Optional)</label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Send Message
                    </button>

                    {status === 'success' && (
                        <p className={styles.successMessage}>
                            Thank you! Your message has been sent. We will get back to you shortly.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
