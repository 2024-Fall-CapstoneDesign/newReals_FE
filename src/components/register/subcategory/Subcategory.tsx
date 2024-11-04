import KeywordList from '../keywordList/KeywordList';
import * as S from './SubCategoryStyle';

interface SubcategoryProps {
  data: Record<string, string[]>;
  isActives: string[];
  onToggleKeyword: (keyword: string) => void;
}

const Subcategory = ({ data, isActives, onToggleKeyword }: SubcategoryProps) => {
  const key = Object.keys(data)[0];
  const keyList = data[key];

  const handleClick = () => {
    const allSelected = keyList.every((keyword) => isActives.includes(keyword));

    keyList.forEach((keyword) => {
      if (allSelected) {
        if (isActives.includes(keyword)) {
          onToggleKeyword(keyword);
        }
      } else {
        if (!isActives.includes(keyword)) {
          onToggleKeyword(keyword);
        }
      }
    });
  };

  return (
    <S.Container>
      <S.SubCategory>
        {key}
        <S.Total onClick={handleClick}>
          <S.Icon
            src={
              keyList.every((keyword) => isActives.includes(keyword))
                ? '/icons/CheckActiveIcon.svg'
                : '/icons/CheckIcon.svg'
            }
            alt="checkIcon"
          />
          전체선택
        </S.Total>
      </S.SubCategory>
      <KeywordList list={keyList} isActives={isActives} onToggleKeyword={onToggleKeyword} />
    </S.Container>
  );
};

export default Subcategory;
