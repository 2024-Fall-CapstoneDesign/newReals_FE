import { useState } from 'react';
import Modal from '../../components/common/modal/Modal';
import AnswerModal from '../../components/newsDetail/quiz/AnswerModal';

const NewsDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal}>Show Answer Modal</button>
      {isOpen && (
        <Modal
          children={<AnswerModal isCorrect={true} onClose={handleCloseModal} />}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default NewsDetail;
