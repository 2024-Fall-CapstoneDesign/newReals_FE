import { useEffect, useState } from 'react';
import HeadNews from '../../components/common/headNews/HeadNews';
import TabBar from '../../components/common/tabBar/TabBar';
import { useLocation } from 'react-router-dom';
import CardList from '../../components/common/cardList/CardList';
import PageNation from '../../components/common/pageNation/PageNation';
import * as S from './Category.Style';
import { getCategoryNews, getSubCategoryNews } from '../../api/Category';
import { handleScrap } from '../../utils/scrapUtils';

interface DailyNewsProps {
  category: string;
  dailynewsId: number;
  imagePath: string | null;
  keyword: string;
  quizQuestion: string;
  subCategory: string;
  title: string;
}

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

const Category = () => {
  const [dailyNews, setDailyNews] = useState<DailyNewsProps | null>(null);
  const [selectSubCategory, setSelectSubCategory] = useState('');
  const [categoryNews, setCategoryNews] = useState<ListProps[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();

  const category = pathname.split('/')[2] as 'category' | 'society' | 'politics' | 'economy';

  const handleCategory = (category: string) => {
    setSelectSubCategory(selectSubCategory === category ? '' : category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectSubCategory === '') {
        const data = await getCategoryNews(category, currentPage);
        if (data) {
          setDailyNews(data.dailynews);
          setCategoryNews(data.basenewsList);
          setTotalPage(data.totalPage);
        }
      } else {
        const data = await getSubCategoryNews(category, selectSubCategory, currentPage);
        if (data) {
          setCategoryNews(data.basenewsList);
          setTotalPage(data.totalPage);
        }
      }
    };

    fetchData();
  }, [category, currentPage, selectSubCategory]);

  return (
    <div>
      {dailyNews ? (
        <HeadNews
          imagePath={dailyNews.imagePath}
          id={dailyNews.dailynewsId}
          category={dailyNews.category}
          subcategory={dailyNews.subCategory}
          keyword={dailyNews.keyword}
          title={dailyNews.title}
          quiz={dailyNews.quizQuestion}
        />
      ) : (
        <div>Loading...</div>
      )}

      <S.Container>
        <S.TextContainer>
          <S.Title>{category} 뉴스 돌아보기</S.Title>
          <S.Description>카테고리 선택으로 뉴스를 검색해 보세요.</S.Description>
        </S.TextContainer>
        <TabBar type={category} selectedItem={selectSubCategory} onClick={handleCategory} />
        <CardList
          list={categoryNews}
          type={selectSubCategory !== '' ? 'subCategory' : 'category'}
          onScrap={(id) => handleScrap(id, setCategoryNews)}
        />
        <PageNation
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </S.Container>
    </div>
  );
};

export default Category;
