// frontend/src/pages/TensesQuiz.tsx
import QuizEngine from '../components/QuizEngine';
import { separateTensesData } from '../data/separateTensesData';
import { mixedTensesQuizData } from '../data/mixedTensesQuizData';

export default function TensesQuiz() {
  return (
    <QuizEngine
      title="Tenses Master Quiz"
      description="เลือก Tense ที่ต้องการฝึกฝน หรือทำแบบทดสอบรวม"
      backPath="/grammar"
      themeColor="purple" // [แก้ไข] เปลี่ยนสีตรงนี้ (เลือกได้: indigo, blue, purple, orange)
      topics={separateTensesData}
      mixedQuestions={mixedTensesQuizData}
    />
  );
}