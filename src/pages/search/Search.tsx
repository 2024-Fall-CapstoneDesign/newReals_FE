import CardList from '../../components/common/cardList/CardList';
import * as S from './Search.Style';
import XIcon from '../../assets/icons/XIcon.svg';
import Tag from '../../components/common/tag/Tag';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchResults } from '../../api/Search';
import Loading from '../../components/common/Loading/Loding';
import { handleScrap } from '../../utils/scrapUtils';
import { ListProps } from '../../types/newsType';
import PageNation from '../../components/common/pageNation/PageNation';

const Search = () => {
  const [searchList, setSearchList] = useState<ListProps[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchWord = location.state?.input; // `state`에서 `input` 값 받기
  const page = '1'; // 기본 페이지 1로 설정
  const [isLoading, setIsLoading] = useState(false);
  //const [totalPage, setTotalPage] = useState(0);
  //const [currentPage, setCurrentPage] = useState(1);

  const handleCloseButton = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  /*const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };*/

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      if (searchWord) {
        try {
          const results = await getSearchResults(searchWord, page); // 검색 결과 호출
          setSearchList(results.basenewsList); // 결과를 상태로 저장
          //setTotalPage(results.totalPage);
          console.log('검색 결과:', results);
        } catch (error) {
          console.error('검색 호출 오류:', error);
        } finally {
          setIsLoading(false); // 로딩 상태 종료
        }
      } else {
        setSearchList([]); // 검색어가 없으면 빈 결과로 초기화
      }
    };

    fetchSearchResults(); // 비동기 함수 호출
  }, [searchWord, page]); // 검색어와 페이지 변경 시 호출

  return (
    <S.Container>
      <S.HeadPart>
        <S.Title>
          <S.Keyword>'{searchWord}'</S.Keyword> 에 대한 검색 결과예요.
          <Tag color="gray_thinking" size="large">
            {searchList?.length}개
          </Tag>
        </S.Title>
        <S.Close onClick={handleCloseButton}>
          닫기
          <S.CloseImg src={XIcon} alt="닫기" />
        </S.Close>
      </S.HeadPart>
      {isLoading && <Loading message="검색결과를 불러오는 중입니다" />}
      {searchList && (
        <CardList list={searchList} type="home" onScrap={(id) => handleScrap(id, setSearchList)} />
      )}
    </S.Container>
  );
};

export default Search;
