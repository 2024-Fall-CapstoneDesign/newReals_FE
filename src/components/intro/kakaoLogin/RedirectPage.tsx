import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../common/Loading/Loding';

const RedirectPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const getAccessToken = async (code: string) => {
    try {
      const response = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: import.meta.env.VITE_KAKAO_REST_KEY, // REST API 키
          redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI, // 리디렉션 URI
          code: code, // 받은 인증 코드
        }),
      });

      const data = await response.json();

      if (data.access_token) {
        console.log('Access Token:', data.access_token);

        // 필요에 따라 상태 저장 또는 사용자 정보를 요청
        localStorage.setItem('access_token', data.access_token);

        // 홈 페이지로 리다이렉트
        navigate('/home');
      } else {
        console.error('토큰 요청 실패:', data);
        navigate('/'); // 실패 시 메인 페이지로 리다이렉트
      }
    } catch (error) {
      console.error('토큰 요청 중 오류 발생:', error);
      navigate('/'); // 실패 시 메인 페이지로 리다이렉트
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      console.error('OAuth 인증 실패:', error);
      navigate('/');
    } else if (code) {
      console.log('OAuth 인증 성공, code:', code);
      getAccessToken(code); // Access Token 요청 함수 호출
    }
  }, [navigate]);

  return isLoading ? <Loading message="카카오 계정으로 인증 중입니다..." /> : null;
};

export default RedirectPage;
