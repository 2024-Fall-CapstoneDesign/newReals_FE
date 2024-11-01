import Button from '../../common/button/Button';
import QuizAnswer from '../../common/quizAnswer/QuizAnswer';
import * as S from './QuizStyle';
import OIcon from '/public/icons/OIcon.svg?react';
import XIcon from '/public/icons/XIcon.svg?react';

interface Quiz {
  quiz: string;
  isSolved: boolean;
  answer: boolean;
  comment: string;
}

//@TODO
// 백엔드 API 명세서 보고 quiz 정보를 여기서 가져올지 상위 컴포넌트에서 가져올지 고민해야함!
const Quiz = ({ quiz, isSolved, answer, comment }: Quiz) => {
  const handleClickO = () => {
    console.log('O 클릭 했을 때 백엔드 연결해야함');
  };

  const handleClickX = () => {
    console.log('X 클릭 했을 때 백엔드 연결해야함');
  };

  return (
    <S.Container>
      <S.Quiz>
        <S.Q>Q.</S.Q> 오늘의 퀴즈
      </S.Quiz>
      <S.Content>
        <S.Text>{quiz}</S.Text>
        {isSolved ? (
          <QuizAnswer color="gray" answer={answer} comment={comment} />
        ) : (
          <S.ButtonContainer>
            <Button onClick={handleClickO}>
              <OIcon />
            </Button>
            <Button onClick={handleClickX} type="quiz">
              <XIcon />
            </Button>
          </S.ButtonContainer>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Quiz;
