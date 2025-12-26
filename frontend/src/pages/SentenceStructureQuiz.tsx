// frontend/src/pages/SentenceStructureQuiz.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../components/QuizEngine';
import { separateSentenceStructureData } from '../data/separateSentenceStructureData';
import { sentenceStructureQuizData } from '../data/sentenceStructureQuizData';

export default function SentenceStructureQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Sentence Structure Quiz"
      description="ทดสอบความเข้าใจเรื่องประเภทประโยค (Types) และหน้าที่ของประโยค (Purpose)"
      backPath="/grammar"
      themeColor="pink" // ใช้สีใหม่
      topics={separateSentenceStructureData}
      mixedQuestions={sentenceStructureQuizData}
      initialTopicId={initialTopicId}
    />
  );
}