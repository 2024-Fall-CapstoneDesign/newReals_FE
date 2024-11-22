import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppRouter from './AppRouter';
import Footer from './components/common/footer/Footer';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const isSelectedInterest = localStorage.getItem('is_interests_selected') === 'true';

    // 1. 액세스 토큰과 관심사 선택 여부가 있는 경우
    if (accessToken && isSelectedInterest) {
      // 루트 경로('/')로 접근하면 홈으로 리다이렉트
      if (location.pathname === '/') {
        navigate('/home');
      }
      return;
    }

    // 2. 액세스 토큰은 있지만 관심사 선택이 안 된 경우
    if (accessToken && !isSelectedInterest) {
      // 관심사 등록 페이지로 리다이렉트
      if (location.pathname !== '/register') {
        navigate('/register');
      }
      return;
    }

    // 3. 액세스 토큰이 없는 경우
    if (!accessToken) {
      if (location.pathname !== '/') {
        navigate('/'); // 로그인 페이지로 리다이렉트
      }
      return;
    }
  }, [navigate, location]);

  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
