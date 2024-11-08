import Button from '../../common/button/Button';
import QuizAnswer from '../../common/quizAnswer/QuizAnswer';
import * as S from './Quiz.Style';
import OIcon from '../../../assets/icons/OIcon.svg?react';
import XIcon from '../../../assets/icons/XIcon.svg?react';

interface Quiz {
  quiz: string;
  isSolved: boolean;
  answer: boolean;
  comment: string;
}

//@TODO
// 백엔드 API 명세서 보고 quiz 정보를 여기서 가져올지 상위 컴포넌트에서 가져올지 고민해야함!

/**
 *
 * @param quiz - 퀴즈 내용
 * @param isSolved - 퀴즈를 풀었는지의 유무
 * @param answer - 퀴즈의 정답
 * @param comment - 퀴즈의 해설
 * @returns
 */
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
          <QuizAnswer color="purple" answer={answer} comment={comment} />
        ) : (
          <S.ButtonContainer>
            <Button onClick={handleClickO}>
              <OIcon />
            </Button>
            <Button onClick={handleClickX} buttonStyle="quiz">
              <XIcon />
            </Button>
          </S.ButtonContainer>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Quiz;
