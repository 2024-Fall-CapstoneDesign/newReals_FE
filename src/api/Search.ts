import api from './instance';

const accessToken = localStorage.getItem('access_token');

/**
 * 검색 결과 조회
 * @param id - 뉴스 id
 * @param locationProp - 어디서 선택한 뉴스인지에 따라 keyword, category, subCategory
 * @returns
 */
export const getSearchResults = async (searchWord: string, page: string) => {
  try {
    const res = await api.get(`/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: { searchWord, page },
    });
    if (res.data.data) {
      return res.data.data;
    }
    console.log(res.data);
  } catch (err) {
    console.error('검색 오류:', err);
    alert(err);
  }
};
