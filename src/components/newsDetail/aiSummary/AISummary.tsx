import * as S from './AISummaryStyle';
import DownArrowIcon from '../../../assets/icons/DownArrowIcon.svg';
import UpArrowIcon from '../../../assets/icons/UpArrowIcon.svg';
import { useState } from 'react';

const AISummary = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.AIPart>
      <S.FixedPart>
        <S.PartName>AI 요약 보기</S.PartName>
        {isOpen ? (
          <S.ToggleImg onClick={handleToggle} src={UpArrowIcon} alt="접어두기" />
        ) : (
          <S.ToggleImg onClick={handleToggle} src={DownArrowIcon} alt="펼쳐보기" />
        )}
      </S.FixedPart>
      {isOpen && (
        <S.Content>
          윤석열 대통령이 필리핀을 국빈 방문해 무역·투자·에너지 등 협력 강화 및 동포 사회 이익을
          논의하고, 아세안 정상회의에도 참석할 예정입니다.
        </S.Content>
      )}
    </S.AIPart>
  );
};

export default AISummary;
