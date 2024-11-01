import * as S from './ChipStyle';

interface ChipProps {
  children: React.ReactNode;
}

const Chip = ({ children }: ChipProps) => {
  return <S.Chip>{children}</S.Chip>;
};
export default Chip;
