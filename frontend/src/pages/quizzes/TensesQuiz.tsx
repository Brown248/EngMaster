// frontend/src/pages/TensesQuiz.tsx
import QuizEngine from '../../components/QuizEngine';
// ✅ แก้ไข Path ตรงนี้
import { separateTensesData } from '../../data/exercises/separateTensesData';
import { mixedTensesQuizData } from '../../data/quizzes/mixedTensesQuizData';

export default function TensesQuiz() {
  return (
    <QuizEngine
      title="Tenses Master Quiz"
      description="เลือก Tense ที่ต้องการฝึกฝน หรือทำแบบทดสอบรวม"
      backPath="/grammar"
      themeColor="purple"
      topics={separateTensesData}
      mixedQuestions={mixedTensesQuizData}
    />
  );
}