// frontend/src/pages/ConditionalsQuiz.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../../components/QuizEngine';
import { separateConditionalsData } from '../../data/exercises/separateConditionalsData';
import { conditionalsQuizData } from '../../data/quizzes/conditionalsQuizData';

export default function ConditionalsQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Conditionals Quiz (If-Clauses)"
      description="ทดสอบความเข้าใจประโยคเงื่อนไข (Zero, First, Second, Third, Mixed)"
      backPath="/grammar"
      themeColor="red" // ใช้สีแดง
      topics={separateConditionalsData}
      mixedQuestions={conditionalsQuizData}
      initialTopicId={initialTopicId}
    />
  );
}