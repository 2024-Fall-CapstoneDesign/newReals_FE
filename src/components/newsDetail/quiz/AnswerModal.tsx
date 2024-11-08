import * as S from './AnswerModal.Style';
import SadEmoji from '../../../assets/icons/SadEmoji.svg';
import CongratulationEmoji from '../../../assets/icons/CongratulationEmoji.svg';
import XIcon from '../../../assets/icons/XIcon.svg';
import QuizAnswer from '../../common/quizAnswer/QuizAnswer';
import Button from '../../common/button/Button';
import { useNavigate } from 'react-router-dom';
import PointAlert from './PointAlert';
import Modal from '../../common/modal/Modal';

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
    <Modal onClose={onClose}>
      <S.ModalPart>
        <S.ModalHead>
          <S.Close src={XIcon} alt="창닫기" onClick={onClose} />
        </S.ModalHead>
        <S.EmojiPart>
          <S.ModalImg src={isCorrect ? CongratulationEmoji : SadEmoji} alt="모달 이모지" />
          {isCorrect ? '축하해요! 정답이에요' : '아쉽지만 정답이 아니에요..'}
          {isCorrect && <PointAlert />}
        </S.EmojiPart>
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
    </Modal>
  );
};

export default AnswerModal;