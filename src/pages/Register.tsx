import styled from 'styled-components';
import Text from '../components/register/text/Text';
import TabBar from '../components/common/tabBar/TabBar';
import { useState } from 'react';
import Subcategory from '../components/register/subcategory/Subcategory';
import { useKeywordContext } from '../components/register/context/KeywordContext';
import { CATEGORIES } from '../constants/Category';

const Register = () => {
  const [category, setCategory] = useState('사회');
  const { getAllSelectedKeywords } = useKeywordContext();

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const handleGetAllKeywords = () => {
    const allSelectedKeywords = getAllSelectedKeywords();
    console.log('선택된 모든 키워드:', allSelectedKeywords);
  };

  return (
    <>
      <Cotnainer>
        <Content>
          <Text nickname="이서" />
          <TabBar type="CATEGORY" selectedItem={category} onClick={handleCategory} />
          <Categories>
            {Object.entries(CATEGORIES['사회']).map(([subcategory, keywords]) => (
              <Subcategory key={subcategory} data={{ [subcategory]: keywords }} />
            ))}
          </Categories>
        </Content>
        <button onClick={handleGetAllKeywords}>모든 선택된 키워드 가져오기</button>
      </Cotnainer>
    </>
  );
};

export default Register;

const Cotnainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 8.5rem 7.5rem;
  gap: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;
