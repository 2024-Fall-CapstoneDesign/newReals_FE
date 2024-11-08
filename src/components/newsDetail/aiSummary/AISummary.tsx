import * as S from './AISummary.Style';
import DownArrowIcon from '../../../assets/icons/DownArrowIcon.svg';
import UpArrowIcon from '../../../assets/icons/UpArrowIcon.svg';
import { useState } from 'react';

interface AISummary {
  text: string;
}

/**
 *
 * @param title - AI 요약 안의 글씨
 * @returns
 */
const AISummary = ({ text }: AISummary) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.AIPart>
      <S.FixedPart>
        <S.PartName>AI 요약 보기</S.PartName>
        <S.ToggleImg
          onClick={handleToggle}
          src={isOpen ? UpArrowIcon : DownArrowIcon}
          alt="토글 버튼"
        />
      </S.FixedPart>
      {isOpen && <S.Content>{text}아아에이엥</S.Content>}
    </S.AIPart>
  );
};

export default AISummary;
