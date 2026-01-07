import { useLocation } from 'react-router-dom';
import QuizEngine from '../../components/QuizEngine';
import { separateReportedSpeechData } from '../../data/exercises/separateReportedSpeechData';
import { reportedSpeechQuizData } from '../../data/quizzes/reportedSpeechQuizData';

export default function ReportedSpeechQuiz() {
  const location = useLocation();
  const initialTopicId = location.state?.subTopicId;

  return (
    <QuizEngine
      title="Reported Speech Quiz"
      description="ทดสอบการเปลี่ยนประโยค Direct เป็น Indirect Speech"
      backPath="/grammar"
      themeColor="lime"
      topics={separateReportedSpeechData}
      mixedQuestions={reportedSpeechQuizData}
      initialTopicId={initialTopicId}
    />
  );
}