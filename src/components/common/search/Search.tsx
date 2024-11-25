import CardList from '../cardList/CardList';
import * as S from './Search.Style';
import XIcon from '../../../assets/icons/XIcon.svg';
import Tag from '../tag/Tag';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../api/instance';

/*interface SearchProps {
  keyword: string;
}*/

const Search = () => {
  const [searchList, setSearchList] = useState<any[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchWord = queryParams.get('query'); // 입력된 검색어 가져오기
  const page = queryParams.get('page') || '1';

  const fetchSearchResults = async (searchWord: string, page: string) => {
    try {
      const res = await api.get(`/search`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        params: { searchWord, page },
      });
      setSearchList(res.data.basenewsID);
      console.log(res.data);
    } catch (err) {
      console.error('검색 오류:', err);
      alert(err);
    }
  };

  useEffect(() => {
    if (searchWord) {
      fetchSearchResults(searchWord, page);
    } else {
      setSearchList([]); // 검색어가 없으면 빈 결과 표시
    }
  }, [searchWord, page]);

  return (
    <S.Container>
      <S.HeadPart>
        <S.Title>
          <S.Keyword>'{searchWord}'</S.Keyword> 에 대한 검색 결과예요.
          <Tag color="gray_thinking" size="large">
            {searchList?.length}개
          </Tag>
        </S.Title>
        <S.Close>
          닫기
          <S.CloseImg src={XIcon} alt="닫기" />
        </S.Close>
      </S.HeadPart>
      {searchList && <CardList list={searchList} />}
    </S.Container>
  );
};

export default Search;
