// frontend/src/pages/VoiceQuiz.tsx
import QuizEngine from '../components/QuizEngine';
import { voiceQuizData } from '../data/voiceQuizData';

export default function VoiceQuiz() {
  return (
    <QuizEngine
      title="Voice Quiz (Active & Passive)"
      backPath="/grammar"
      themeColor="blue"
      // ส่งคำถามเข้าไปตรงๆ เพื่อให้เริ่ม Quiz ทันทีโดยไม่ต้องมีหน้าเมนู
      directQuestions={voiceQuizData} 
    />
  );
}