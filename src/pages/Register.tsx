import styled from 'styled-components';
import Text from '../components/register/text/Text';
import TabBar from '../components/common/tabBar/TabBar';
import { useState } from 'react';
import Subcategory from '../components/register/subcategory/Subcategory';
import { CATEGORIES } from '../constants/Category';
import SelectBox from '../components/register/selectBox/SelectBox';
import KeywordProvider from '../components/register/context/KeywordContext';

const Register = () => {
  const [category, setCategory] = useState('사회');

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <KeywordProvider>
      <Cotnainer>
        <Content>
          <Text nickname="이서" />
          <TabBar type="CATEGORY" selectedItem={category} onClick={handleCategory} />
          <Categories>
            {CATEGORIES[category] &&
              Object.entries(CATEGORIES[category]).map(([subcategory, keywords]) => (
                <Subcategory key={subcategory} data={{ [subcategory]: keywords }} />
              ))}
          </Categories>
        </Content>
        <SelectBox />
      </Cotnainer>
    </KeywordProvider>
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
