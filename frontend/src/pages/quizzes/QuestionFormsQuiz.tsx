import { useLocation } from 'react-router-dom';
import QuizEngine from '../../components/QuizEngine';
import { separateQuestionFormsData } from '../../data/exercises/separateQuestionFormsData';
import { questionFormsQuizData } from '../../data/quizzes/questionFormsQuizData';

export default function QuestionFormsQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Question Forms Quiz"
      description="ทดสอบการตั้งคำถาม Yes/No, Wh-Questions และ Tag Questions"
      backPath="/grammar"
      themeColor="violet"
      topics={separateQuestionFormsData}
      mixedQuestions={questionFormsQuizData}
      initialTopicId={initialTopicId}
    />
  );
}