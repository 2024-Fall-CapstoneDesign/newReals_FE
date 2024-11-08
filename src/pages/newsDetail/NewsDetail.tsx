import { useState } from 'react';
import AnswerModal from '../../components/newsDetail/quiz/AnswerModal';

const NewsDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleModal}>Show Answer Modal</button>
      {isOpen && <AnswerModal isCorrect={true} onClose={handleModal} />}
    </div>
  );
};

export default NewsDetail;
