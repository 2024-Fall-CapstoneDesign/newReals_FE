import api from './instance';

const accessToken = localStorage.getItem('access_token');

/**
 * 프로필 정보 조회
 * @returns
 */
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

/**
 * 출석 현황 조회
 * @returns
 */
export const getAttendance = async () => {
  try {
    const response = await api.get('/accounts/profile/attendance', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.data.attendanceList;
    }
  } catch (error) {
    console.error(error);
  }
};
