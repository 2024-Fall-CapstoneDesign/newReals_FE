import Chip from './chip/Chip';
import * as S from './QuizAnswerStyle';
import OIcon from '../../../assets/icons/OIcon.svg?react';
import XIcon from '../../../assets/icons/XIcon.svg?react';

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
        {answer ? <OIcon /> : <XIcon />}
      </S.Container>
      <S.Container>
        <Chip>해설</Chip>
        <S.Text>{comment}</S.Text>
      </S.Container>
    </S.QuizAnswer>
  );
};

export default QuizAnswer;
