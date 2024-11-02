import * as S from './RegisterStyle';
import Text from '../../components/register/text/Text';
import TabBar from '../../components/common/tabBar/TabBar';
import { useState } from 'react';
import Subcategory from '../../components/register/subcategory/Subcategory';
import { CATEGORIES } from '../../constants/Category';
import SelectBox from '../../components/register/selectBox/SelectBox';
import KeywordProvider from '../../components/register/context/KeywordContext';

const Register = () => {
  const [category, setCategory] = useState('사회');

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <KeywordProvider>
      <S.Cotnainer>
        <S.Content>
          <Text nickname="이서" /> {/* 닉네임 받아오는 것으로 바꿔야함 */}
          <TabBar type="CATEGORY" selectedItem={category} onClick={handleCategory} />
          <S.Categories>
            {CATEGORIES[category] &&
              Object.entries(CATEGORIES[category]).map(([subcategory, keywords]) => (
                <Subcategory key={subcategory} data={{ [subcategory]: keywords }} />
              ))}
          </S.Categories>
        </S.Content>
        <SelectBox />
      </S.Cotnainer>
    </KeywordProvider>
  );
};

export default Register;
