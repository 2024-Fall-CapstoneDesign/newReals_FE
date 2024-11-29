import { useState } from 'react';
import Bookmark from '../../common/bookmark/Bookmark';
import Tag from '../../common/tag/Tag';
import EmojiCount from '../emojiCount/EmojiCount';
import * as S from './ArticleHeader.Style';

interface ArticleHeadProps {
  category: string;
  subCategory: string;
  keyword: string;
  title: string;
  date: string;
  count: number;
  isScrapped: boolean;
}

const ArticleHeader = ({
  category,
  subCategory,
  keyword,
  title,
  date,
  count,
  isScrapped,
}: ArticleHeadProps) => {
  const [isSelected, setIsSelected] = useState(isScrapped);
  const handleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <S.ArticleHead>
      <S.CategoryPart>
        <Tag children={`${category} > ${subCategory}`} color="purple" size="large" /># {keyword}
      </S.CategoryPart>
      <S.TitlePart>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitlePart>
      <S.MyPart>
        <EmojiCount count={count} isActive={true} />
        <Bookmark type="article" isSelected={isSelected} onClick={handleSelected} />
      </S.MyPart>
    </S.ArticleHead>
  );
};

export default ArticleHeader;
