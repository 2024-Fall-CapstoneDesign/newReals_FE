import * as S from './AnswerModal.Style';
import SadEmoji from '../../../assets/icons/SadEmoji.svg';
import CongratulationEmoji from '../../../assets/icons/CongratulationEmoji.svg';
import XIcon from '../../../assets/icons/XIcon.svg';
import QuizAnswer from '../../common/quizAnswer/QuizAnswer';
import Button from '../../common/button/Button';
import { useNavigate } from 'react-router-dom';
import PointAlert from './PointAlert';

interface ModalProps {
  isCorrect: boolean;
  onClose: () => void;
}

/**
 *
 * @param isCorrect - 정답 맞았는지 여부
 * @param onClose - 닫는 함수
 * @returns
 */

const AnswerModal = ({ isCorrect, onClose }: ModalProps) => {
  const navigate = useNavigate();
  return (
    <S.ModalPart>
      <S.ModalHead>
        <S.Close src={XIcon} alt="창닫기" onClick={onClose} />
      </S.ModalHead>
      {isCorrect ? (
        <S.EmojiPart>
          <S.ModalImg src={CongratulationEmoji} alt="모달 이모지" />
          축하해요! 정답이에요
          <PointAlert />
        </S.EmojiPart>
      ) : (
        <S.EmojiPart>
          <S.ModalImg src={SadEmoji} alt="모달 이모지" />
          아쉽지만 정답이 아니에요..
        </S.EmojiPart>
      )}

      <S.AnswerPart>
        <QuizAnswer color="gray" answer={true} comment="해설" />
        <Button
          buttonStyle="modal"
          onClick={() => {
            navigate('/profile');
          }}
        >
          내 포인트 보러가기
        </Button>
      </S.AnswerPart>
    </S.ModalPart>
  );
};

export default AnswerModal;
