import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import * as S from './CardList.Style';

interface ListProps {
  basenewsId: number;
  imageUrl?: string;
  isScrapped: boolean;
  category: string;
  keyword: string;
  title: string;
  summary: string;
  date: string;
}

interface CardListProps {
  list: ListProps[];
  type: 'home' | 'category' | 'subCategory';
}

/**
 *
 * @param list - CardList
 * @param type - 'home' | 'category' | 'subCategory' 뉴스 클릭을 어디에서 했는지!
 * @returns
 */
const CardList = ({ list, type }: CardListProps) => {
  const navigate = useNavigate();
  const handleBookmark = () => {
    console.log('북마크 기능 구현 필요');
  };

  const getStateData = (card: ListProps) => {
    const mapping = {
      home: { keyword: card.keyword },
      category: { category: card.category },
      subCategory: { subCategory: card.category },
    };

    return mapping[type];
  };

  const handleCardClick = (card: ListProps) => {
    const stateData = getStateData(card);
    navigate(`/newsDetail/${card.basenewsId}`, { state: stateData });
  };

  return (
    <S.CardContainer>
      {list.map((card) => (
        <Card
          key={card.basenewsId}
          imageUrl={card.imageUrl}
          isSelected={card.isScrapped}
          category={card.category}
          keyword={card.keyword}
          title={card.title}
          description={card.summary}
          date={card.date}
          onClickBookmark={handleBookmark}
          onClickCard={() => handleCardClick(card)}
        />
      ))}
    </S.CardContainer>
  );
};

export default CardList;
