import { useState } from 'react';
import HeadNews from '../../components/common/headNews/HeadNews';
import TabBar from '../../components/common/tabBar/TabBar';
import * as S from './CategoryStyle';
import { useLocation } from 'react-router-dom';

const MOCKDATA = [
  {
    id: 1,
    category: '정치',
    subCategory: '행정',
    keyword: '#키워드',
    title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...1',
    quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  },
];

const Category = () => {
  const [selectCategory, setSelectCategory] = useState('');
  const { pathname } = useLocation();

  const category = pathname.split('/')[2].toUpperCase() as
    | 'CATEGORY'
    | 'SOCIETY'
    | 'POLITICS'
    | 'ECONOMY';

  const handleCategory = (category: string) => {
    setSelectCategory(category);
  };

  return (
    <div>
      <HeadNews
        id={MOCKDATA[0].id}
        category={MOCKDATA[0].category}
        subcategory={MOCKDATA[0].subCategory}
        keyword={MOCKDATA[0].keyword}
        title={MOCKDATA[0].title}
        quiz={MOCKDATA[0].quiz}
      />
      <S.Container>
        <S.TextContainer>
          <S.Title>{MOCKDATA[0].category} 뉴스 돌아보기</S.Title>
          <S.Description>카테고리 선택으로 뉴스를 검색해 보세요.</S.Description>
        </S.TextContainer>
        <TabBar type={category} selectedItem={selectCategory} onClick={handleCategory} />
      </S.Container>
    </div>
  );
};

export default Category;
