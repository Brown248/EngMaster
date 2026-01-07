import QuizEngine from '../../components/QuizEngine';
import { mixedGrammarQuizData } from '../../data/quizzes/mixedGrammarQuizData';

export default function MixedGrammarQuiz() {
  return (
    <QuizEngine 
      title="Ultimate Mixed Grammar Challenge" 
      description="ทดสอบรวมทุกหัวข้อไวยากรณ์ 30 ข้อ (Tenses, Voice, Speech, etc.)"
      directQuestions={mixedGrammarQuizData} 
      backPath="/grammar" 
      themeColor="amber"
    />
  );
}