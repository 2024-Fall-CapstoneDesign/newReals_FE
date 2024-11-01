import Chip from './chip/Chip';
import * as S from './QuizAnswerStyle';
import OIcon from '/public/icons/OIcon.svg?react';
import XIcon from '/public/icons/XIcon.svg?react';

interface QuizAnswerProps {
  color: 'gray' | 'purple';
  answer: boolean;
  comment: string;
}

const QuizAnswer = ({ color, answer, comment }: QuizAnswerProps) => {
  return (
    <S.QuizAnswer $color={color}>
      <S.AnswerContainer>
        <Chip>정답</Chip>
        {answer ? <OIcon /> : <XIcon />}
      </S.AnswerContainer>
      <S.Container>
        <Chip>해설</Chip>
        <S.Text>{comment}</S.Text>
      </S.Container>
    </S.QuizAnswer>
  );
};

export default QuizAnswer;
