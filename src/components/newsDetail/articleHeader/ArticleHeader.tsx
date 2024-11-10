import { useState } from 'react';
import Bookmark from '../../common/bookmark/Bookmark';
import Tag from '../../common/tag/Tag';
import EmojiCount from '../emojiCount/EmojiCount';
import * as S from './ArticleHeader.Style';

const MOCKDATA = {
  id: 1,
  category: '정치',
  subCategory: '행정',
  keyword: '키워드',
  date: '2024-11-10',
  title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...1',
  count: 46,
  quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
};

const ArticleHeader = () => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <S.ArticleHead>
      <S.CategoryPart>
        <Tag
          children={`${MOCKDATA.category} > ${MOCKDATA.subCategory}`}
          color="purple"
          size="large"
        />
        # {MOCKDATA.keyword}
      </S.CategoryPart>
      <S.TitlePart>
        <S.Title>{MOCKDATA.title}</S.Title>
        <S.Date>{MOCKDATA.date}</S.Date>
      </S.TitlePart>
      <S.MyPart>
        <EmojiCount count={MOCKDATA.count} isActive={true} />
        <Bookmark type="article" isSelected={isSelected} onClick={handleSelected} />
      </S.MyPart>
    </S.ArticleHead>
  );
};

export default ArticleHeader;
