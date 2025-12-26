// frontend/src/pages/VoiceQuiz.tsx
import QuizEngine from '../components/QuizEngine';
import { separateVoiceData } from '../data/separateVoiceData'; // [New] Import ข้อมูลแบบแยกหัวข้อ
import { voiceQuizData } from '../data/voiceQuizData'; // ใช้ข้อมูลเดิมเป็น Mixed Challenge

export default function VoiceQuiz() {
  return (
    <QuizEngine
      title="Voice Quiz (Active & Passive)"
      description="ฝึกฝนการเปลี่ยนรูปประโยคระหว่างประธานกระทำและถูกกระทำ"
      backPath="/grammar"
      themeColor="purple"
      
      // [Update] เปลี่ยนมาใช้โครงสร้างแบบมีเมนู
      topics={separateVoiceData} 
      mixedQuestions={voiceQuizData}
    />
  );
}