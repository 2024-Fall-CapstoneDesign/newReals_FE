import * as S from './KeywordList.Style';
import Keyword from '../keyword/Keyword';

interface KeywordListProps {
  list: string[];
  isActives: string[];
  onToggleKeyword: (keyword: string) => void;
}

/**
 *
 * @param list - 키워드의 list
 * @param isActives - 선택된 키워드 배열
 * @onTogglekeyword - 키워드 클릭 시 수행할 함수
 * @returns
 */
const KeywordList = ({ list, isActives, onToggleKeyword }: KeywordListProps) => {
  return (
    <S.KeywordList>
      {list.map((keyword) => (
        <Keyword key={keyword} isActive={isActives.includes(keyword)} onToggle={onToggleKeyword}>
          {keyword}
        </Keyword>
      ))}
    </S.KeywordList>
  );
};

export default KeywordList;
