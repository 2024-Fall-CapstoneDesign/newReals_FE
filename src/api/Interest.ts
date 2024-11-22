import api from './instance';

interface KeywordsProps {
  keywords: string[];
}

/**
 * 관심사 선택 페이지
 * @param keywords - 선택된 키워드 배열
 * @returns
 */
export const postKeywords = async ({ keywords }: KeywordsProps) => {
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = await api.post('/register', keywords, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('관심사 저장 오류', error);
  }
};
