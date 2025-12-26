// frontend/src/pages/ClausesQuiz.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../components/QuizEngine';
import { separateClausesData } from '../data/separateClausesData';
import { clausesQuizData } from '../data/clausesQuizData';

export default function ClausesQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Clauses Quiz"
      description="ทดสอบความเข้าใจเรื่องอนุประโยค (Independent & Dependent Clauses)"
      backPath="/grammar"
      themeColor="blue" // ใช้สี Teal
      topics={separateClausesData}
      mixedQuestions={clausesQuizData}
      initialTopicId={initialTopicId}
    />
  );
}