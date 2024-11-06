import KeywordList from '../keywordList/KeywordList';
import * as S from './SubCategory.Style';
import CheckActiveIcon from '../../../assets/icons/CheckActiveIcon.svg';
import CheckIcon from '../../../assets/icons/CheckIcon.svg';

interface SubcategoryProps {
  data: Record<string, string[]>;
  isActives: string[];
  onToggleKeyword: (keyword: string) => void;
}

/**
 * 
 @param data - 서브카테고리 이름을 키로 하고 키워드 배열을 값으로 가진 객체
 * @param isActives - 선택된 키워드 배열
 * @param onToggleKeyword - 키워드 선택/해제 시 호출되는 함수
 * @returns 
 */
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
              keyList.every((keyword) => isActives.includes(keyword)) ? CheckActiveIcon : CheckIcon
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
