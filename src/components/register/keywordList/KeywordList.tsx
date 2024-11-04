import * as S from './KeywordListStyle';
import Keyword from '../keyword/Keyword';

interface KeywordListProps {
  list: string[];
  isActives: string[];
  onToggleKeyword: (keyword: string) => void;
}

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
