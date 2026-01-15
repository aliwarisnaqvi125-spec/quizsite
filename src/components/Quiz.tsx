"use client";

import { useState } from 'react';
import styles from './Quiz.module.css';

const questions = [
    {
        id: 1,
        question: "How does your skin feel midday?",
        options: [
            { label: "Shiny all over", value: "oily" },
            { label: "Tight and flaky", value: "dry" },
            { label: "Oily T-zone, dry cheeks", value: "combo" },
            { label: "Pretty comfortable", value: "normal" }
        ]
    },
    {
        id: 2,
        question: "What is your primary skin concern?",
        options: [
            { label: "Acne & Breakouts", value: "acne" },
            { label: "Fine lines & Wrinkles", value: "aging" },
            { label: "Dullness & Uneven tone", value: "dull" },
            { label: "Redness & Sensitivity", value: "sensitive" }
        ]
    },
    {
        id: 3,
        question: "How much sun exposure do you get daily?",
        options: [
            { label: "I work indoors mostly", value: "low_sun" },
            { label: "I take daily walks", value: "med_sun" },
            { label: "I'm outdoors a lot", value: "high_sun" }
        ]
    }
];

export default function Quiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (value: string) => {
        setAnswers({ ...answers, [step]: value });
    };

    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateResult = () => {
        // Simple logic for demo purposes
        const type = answers[0]; // oily, dry...
        const concern = answers[1]; // acne, aging...

        let recommendation = "";
        if (type === 'oily') recommendation += "We recommend a lightweight gel moisturizer and salicylic acid cleanser. ";
        if (type === 'dry') recommendation += "Look for creamy cleansers and hyaluronic acid serums. ";
        if (concern === 'aging') recommendation += "Consider adding Retinol to your night routine.";
        if (concern === 'dull') recommendation += "Vitamin C serum in the morning is your best friend.";

        return recommendation || "Your skin is balanced! Maintain it with a gentle cleanser and SPF.";
    };

    const restart = () => {
        setStep(0);
        setAnswers({});
        setShowResult(false);
    };

    if (showResult) {
        return (
            <div className={styles.resultContainer}>
                <h2>Your Personalized Skin Profile</h2>
                <div className={styles.recommendationCard}>
                    <h3>Our Expert Advice</h3>
                    <p>{calculateResult()}</p>
                </div>
                <button className="btn btn-primary" onClick={restart}>Retake Quiz</button>
            </div>
        );
    }

    const currentQ = questions[step];

    return (
        <div className={styles.quizContainer}>
            <div className={styles.progressBar}>
                <div style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
            </div>

            <h2 className={styles.question}>{currentQ.question}</h2>

            <div className={styles.optionsGrid}>
                {currentQ.options.map((opt) => (
                    <button
                        key={opt.value}
                        className={`${styles.optionBtn} ${answers[step] === opt.value ? styles.selected : ''}`}
                        onClick={() => handleOptionClick(opt.value)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            <div className={styles.actions}>
                <button
                    className="btn btn-primary"
                    disabled={!answers[step]}
                    onClick={handleNext}
                >
                    {step === questions.length - 1 ? "See Results" : "Next Question"}
                </button>
            </div>
        </div>
    );
}
