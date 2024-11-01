import * as S from './KeywordListStyle';
import Keyword from '../keyword/Keyword';

interface KeywordListProps {
  list: string[];
}

const KeywordList = ({ list }: KeywordListProps) => {
  return (
    <S.KeywordList>
      {list.map((keyword) => (
        <Keyword key={keyword}>{keyword}</Keyword>
      ))}
    </S.KeywordList>
  );
};

export default KeywordList;
