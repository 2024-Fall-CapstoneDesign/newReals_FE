import KeywordList from '../keywordList/KeywordList';
import * as S from './SubCategoryStyle';
import { useKeywordContext } from '../context/KeywordContext';

interface SubcategoryProps {
  data: Record<string, string[]>;
}

const Subcategory = ({ data }: SubcategoryProps) => {
  const { isActives, setIsActives } = useKeywordContext();

  const key = Object.keys(data)[0];
  const keyList = data[key];

  const handleClick = () => {
    const allSelected = keyList.every((keyword) => isActives.includes(keyword));
    const newActives = allSelected
      ? isActives.filter((keyword) => !keyList.includes(keyword))
      : [...isActives, ...keyList];
    setIsActives(newActives);
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
      <KeywordList list={keyList} />
    </S.Container>
  );
};

export default Subcategory;
