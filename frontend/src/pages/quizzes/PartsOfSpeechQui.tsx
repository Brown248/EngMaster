// frontend/src/pages/PartsOfSpeechQui.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../../components/QuizEngine';
import { separatePartsOfSpeechData } from '../../data/exercises/separatePartsOfSpeechData';
import { partsOfSpeechQuizData } from '../../data/quizzes/partsOfSpeechQuizData';

export default function PartsOfSpeechQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Parts of Speech Quiz"
      description="ทดสอบความเข้าใจเรื่องชนิดของคำ (Noun, Verb, etc.)"
      backPath="/grammar"
      themeColor="purple"
      topics={separatePartsOfSpeechData}
      mixedQuestions={partsOfSpeechQuizData}
      initialTopicId={initialTopicId}
    />
  );
}