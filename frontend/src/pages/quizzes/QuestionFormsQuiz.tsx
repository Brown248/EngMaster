import QuizEngine from '../../components/QuizEngine';
import { questionFormsQuizData } from '../../data/quizzes/questionFormsQuizData';

export default function QuestionFormsQuiz() {
  return (
    <QuizEngine 
      title="Question Forms Quiz" 
      directQuestions={questionFormsQuizData} 
      backPath="/grammar" 
      themeColor="indigo"
    />
  );
}