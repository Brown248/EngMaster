import QuizEngine from '../../components/QuizEngine';
import { reportedSpeechQuizData } from '../../data/quizzes/reportedSpeechQuizData';

export default function ReportedSpeechQuiz() {
  return (
    <QuizEngine 
      title="Reported Speech Quiz" 
      directQuestions={reportedSpeechQuizData} 
      backPath="/grammar" 
      themeColor="green"
    />
  );
}