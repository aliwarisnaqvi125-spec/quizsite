import Quiz from '@/components/Quiz';

export default function QuizPage() {
    return (
        <div className="container py-5">
            <div className="text-center mb-2">
                <h1>Discover Your Skin's Needs</h1>
                <p>Answer a few simple questions to get personalized expert advice.</p>
            </div>


            <Quiz />

        </div>
    );
}
