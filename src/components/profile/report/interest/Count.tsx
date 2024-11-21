import * as S from './Count.Style';

interface CountProps {
  chip: string;
  count: number;
}

const CHIP_DATA: Record<string, { text: string; unit: string }> = {
  quiz: { text: '퀴즈', unit: '개' },
  insight: { text: '인사이트', unit: '회' },
  scrap: { text: '스크랩', unit: '번' },
};

const Count = ({ chip, count }: CountProps) => {
  const chipData = CHIP_DATA[chip];

  return (
    <S.Count>
      <S.Chip>{chipData.text}</S.Chip>
      <S.Text>
        {count}
        {chipData.unit}
      </S.Text>
    </S.Count>
  );
};

export default Count;
