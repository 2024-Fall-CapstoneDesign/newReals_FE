import * as S from './Chip.Style';

interface ChipProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

/**
 *
 * @param children - Chip 안에 들어갈 글씨
 * @param isSelected - Chip 선택 유무를 가진 state
 * @param onClick - Chip을 클릭했을 시 수행해야 할 함수
 * @returns
 */
const Chip = ({ children, isSelected, onClick }: ChipProps) => {
  return (
    <S.Chip $isSelected={isSelected} onClick={onClick}>
      {children}
    </S.Chip>
  );
};

export default Chip;
