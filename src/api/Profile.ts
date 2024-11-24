import api from './instance';

const accessToken = localStorage.getItem('access_token');

export const getUser = async () => {
  try {
    const response = await api.get('/accounts/profile/info', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return {
        name: response.data.data.name,
        profilePath: response.data.data.profilePath,
        keywords: response.data.data.keywords || ['키워드 없음'],
        point: response.data.data.point || 0,
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
