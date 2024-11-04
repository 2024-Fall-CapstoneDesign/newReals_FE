import * as S from './SelectItemStyle';

interface SelectItemProps {
  keyword: string;
  onRemove: () => void;
}

const SelectItem = ({ keyword, onRemove }: SelectItemProps) => {
  return (
    <S.Keyword>
      {keyword}
      <S.Icon onClick={onRemove} />
    </S.Keyword>
  );
};

export default SelectItem;
