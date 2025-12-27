// frontend/src/pages/ModalVerbsQuiz.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../components/QuizEngine';
import { separateModalVerbsData } from '../data/exercises/separateModalVerbsData';
import { modalVerbsQuizData } from '../data/quizzes/modalVerbsQuizData';

export default function ModalVerbsQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Modal Verbs Quiz"
      description="ทดสอบความเข้าใจเรื่อง Can, Must, Should, Might"
      backPath="/grammar"
      themeColor="amber" // ใช้สี Amber
      topics={separateModalVerbsData}
      mixedQuestions={modalVerbsQuizData}
      initialTopicId={initialTopicId}
    />
  );
}