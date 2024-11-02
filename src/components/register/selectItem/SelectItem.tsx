import * as S from './SelectItemStyle';

interface SelectItemProps {
  keyword: string;
  onRemove: () => void;
}

const SelectItem = ({ keyword, onRemove }: SelectItemProps) => {
  return (
    <S.Keyword>
      {keyword}
      <S.Icon
        src="/icons/XIcon.svg"
        alt="deleteIcon"
        onClick={onRemove}
        style={{ cursor: 'pointer' }}
      />
    </S.Keyword>
  );
};

export default SelectItem;
