// frontend/src/pages/GerundInfinitiveQuiz.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../components/QuizEngine';
import { separateGerundInfinitiveData } from '../data/exercises/separateGerundInfinitiveData';
import { gerundInfinitiveQuizData } from '../data/quizzes/gerundInfinitiveQuizData';

export default function GerundInfinitiveQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Gerund & Infinitive Quiz"
      description="ทดสอบการใช้ V-ing และ to + V (Enjoy reading vs Want to learn)"
      backPath="/grammar"
      themeColor="fuchsia" // ใช้สีบานเย็น
      topics={separateGerundInfinitiveData}
      mixedQuestions={gerundInfinitiveQuizData}
      initialTopicId={initialTopicId}
    />
  );
}