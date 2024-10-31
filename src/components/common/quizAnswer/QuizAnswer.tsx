import Chip from './chip/Chip';
import * as S from './QuizAnswerStyle';

interface QuizAnswerProps {
  color: 'gray' | 'purple';
  answer: boolean;
  comment: string;
}

const QuizAnswer = ({ color, answer, comment }: QuizAnswerProps) => {
  return (
    <S.QuizAnswer $color={color}>
      <S.Container>
        <Chip>정답</Chip>
        {answer ? <img src="/icons/OIcon.svg" /> : <img src="XIcon.svg" />}
      </S.Container>
      <S.Container>
        <Chip>해설</Chip>
        <S.Text>{comment}</S.Text>
      </S.Container>
    </S.QuizAnswer>
  );
};

export default QuizAnswer;
