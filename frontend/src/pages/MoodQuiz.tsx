// frontend/src/pages/MoodQuiz.tsx
import { useLocation } from 'react-router-dom';
import QuizEngine from '../components/QuizEngine';
import { separateMoodData } from '../data/exercises/separateMoodData';
import { moodQuizData } from '../data/quizzes/moodQuizData';

export default function MoodQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Mood Quiz (Moods of Verbs)"
      description="ทดสอบความเข้าใจเรื่อง Indicative (บอกเล่า), Imperative (คำสั่ง) และ Subjunctive (สมมติ)"
      backPath="/grammar"
      themeColor="purple" // ใช้สีชมพูตามที่กำหนดใน grammarData
      topics={separateMoodData}
      mixedQuestions={moodQuizData}
      initialTopicId={initialTopicId}
    />
  );
}