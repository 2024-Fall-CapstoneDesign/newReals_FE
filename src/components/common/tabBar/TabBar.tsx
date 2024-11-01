import * as S from './TabBarStyled';

const CATEGORY = ['사회', '정치', '경제'];
const SOCIETY = ['사건사고', '교육', '노동', '인권/복지', '식품/의료', '사회 일반'];
const POLITICS = ['대통령실', '국회/정당', '북한', '행정', '국방/외교'];
const ECONOMY = ['금융', '증권', '산업/재계', '중기/벤쳐', '부동산', '글로벌 경제', '생활 경제'];
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
