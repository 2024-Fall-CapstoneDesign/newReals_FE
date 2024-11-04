import { CATEGORIES } from '../../../constants/Category';
import * as S from './TabBarStyled';

const CATEGORY = Object.keys(CATEGORIES);
const SOCIETY = Object.keys(CATEGORIES['사회']);
const POLITICS = Object.keys(CATEGORIES['정치']);
const ECONOMY = Object.keys(CATEGORIES['경제']);
const ITEMS = {
  CATEGORY,
  SOCIETY,
  POLITICS,
  ECONOMY,
};

interface TabBarProps {
  type: 'CATEGORY' | 'SOCIETY' | 'POLITICS' | 'ECONOMY';
  selectedItem: string;
  onClick: (selectedItem: string) => void;
}

const TabBar = ({ type, selectedItem, onClick }: TabBarProps) => {
  const items = ITEMS[type];

  return (
    <S.TabBar>
      {items.map((item, index) => (
        <S.TabItem key={index} onClick={() => onClick(item)} $isSelected={selectedItem === item}>
          {item}
        </S.TabItem>
      ))}
    </S.TabBar>
  );
};

export default TabBar;
