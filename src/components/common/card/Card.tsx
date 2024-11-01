import { MouseEvent } from 'react';
import Bookmark from '../bookmark/Bookmark';
import Tag from '../tag/Tag';
import * as S from './CardStyle';

interface CardProps {
  isSelected: boolean;
  imageUrl?: string;
  category: string;
  keyword: string;
  title: string;
  description: string;
  date: string;
  onClickBookmark: () => void;
  onClickCard: () => void;
}

const Card = ({
  isSelected,
  imageUrl,
  category,
  keyword,
  title,
  description,
  date,
  onClickBookmark,
  onClickCard,
}: CardProps) => {
  const isImageUrl = !!imageUrl;

  const handleClickBookmark = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClickBookmark();
  };

  return isImageUrl ? (
    <S.ImageCard onClick={onClickCard}>
      <S.Image src={imageUrl} alt="기사 이미지" />
      <S.Bookmark>
        <Bookmark isSelected={isSelected} onClick={handleClickBookmark} />
      </S.Bookmark>
      <S.Content>
        <S.Category>
          <Tag color="purple" size="small">
            {category}
          </Tag>
          <S.Keyword>{keyword}</S.Keyword>
        </S.Category>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.Content>
    </S.ImageCard>
  ) : (
    <S.Card onClick={onClickCard}>
      <S.Content>
        <S.CardHeader>
          <S.Category>
            <Tag color="purple" size="small">
              {category}
            </Tag>
            <S.Keyword>{keyword}</S.Keyword>
          </S.Category>
          <Bookmark isSelected={isSelected} onClick={handleClickBookmark} />
        </S.CardHeader>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.Date>{date}</S.Date>
    </S.Card>
  );
};

export default Card;
