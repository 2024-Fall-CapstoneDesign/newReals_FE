import { useNavigate } from 'react-router-dom';
import Card from '../../../common/card/Card';
import SearchBar from '../../../common/header/SearchBar';
import PageNation from '../../../common/pageNation/PageNation';
import * as S from './Scrap.Style';
import { useEffect, useState } from 'react';
import { getScrap } from '../../../../api/Profile';
import { ListProps } from '../../../../types/newsType';

const Scrap = () => {
  const [scrapList, setScrapList] = useState<ListProps[]>();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handleBookmark = () => {
    console.log('북마크 기능 구현 필요');
  };

  const handleCardClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      const scrapData = await getScrap(currentPage);
      if (scrapData) {
        setScrapList(scrapData.basenewsList);
        setTotalPage(scrapData.totalPage);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <S.ScrapContent>
      <S.ScrapHead>
        <S.Text>김뉴스님이 스크랩한 뉴스</S.Text>
        <SearchBar
          placeholder="내가 스크랩한 뉴스"
          onClick={() => {
            console.log('검색 구현해야함');
          }}
        />
      </S.ScrapHead>
      <S.CardList>
        {scrapList?.map((card) => (
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
            onClickCard={() => handleCardClick(card.basenewsId)}
          />
        ))}
      </S.CardList>
      <PageNation
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </S.ScrapContent>
  );
};

export default Scrap;
