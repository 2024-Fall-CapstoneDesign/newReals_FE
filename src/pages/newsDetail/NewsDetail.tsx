import { useState } from 'react';
import AnswerModal from '../../components/newsDetail/quiz/AnswerModal';
import EmojiPart from '../../components/newsDetail/emojipart/EmojiPart';

const NewsDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <EmojiPart />
      <button onClick={handleModal}>Show Answer Modal</button>
      {isOpen && <AnswerModal isCorrect={true} onClose={handleModal} />}
    </div>
  );
};

export default NewsDetail;
