import * as S from './ChipStyle';

interface ChipProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const Chip = ({ children, isSelected, onClick }: ChipProps) => {
  return (
    <S.Chip $isSelected={isSelected} onClick={onClick}>
      {children}
    </S.Chip>
  );
};

export default Chip;
