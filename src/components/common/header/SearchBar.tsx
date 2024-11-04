import * as S from './SearchBarStyle';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';

const SearchBar = () => {
  return (
    <S.InputPart>
      <S.Input placeholder="뉴스 검색"></S.Input>
      <S.SearchImg src={SearchIcon} alt="검색" />
    </S.InputPart>
  );
};

export default SearchBar;
