import * as S from './HeaderStyle';
import Logo from '/images/Logo.svg';
import PeopleIcon from '/icons/PeopleIcon.svg';
import MarketIcon from '/icons/MarketIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const CATEGORIES = [
    { path: '/category/politics', label: '정치' },
    { path: '/category/economy', label: '경제' },
    { path: '/category/society', label: '사회' },
  ];

  return (
    <S.Head>
      <S.ServiceImg
        onClick={() =>
          pathname === '/' || pathname === '/interest' ? navigate('/') : navigate('/home')
        }
        src={Logo}
        alt="Logo"
      />
      {pathname === '/' ? (
        <S.LoginPart>
          <S.LoginImg src={PeopleIcon} alt="LoginIcon" />
          <S.Login>로그인 / 회원가입</S.Login>
        </S.LoginPart>
      ) : pathname === '/interest' ? null : (
        <>
          <S.Category>
            {CATEGORIES.map((category) => (
              <S.CategoryItem
                key={category.path}
                onClick={() => {
                  navigate(category.path);
                }}
              >
                {category.label}
              </S.CategoryItem>
            ))}
          </S.Category>
          <S.SidePart>
            {pathname !== '/market' && pathname !== '/profile' && <SearchBar />}
            <S.Etc>
              <S.Info
                onClick={() => {
                  navigate('/profile');
                }}
              >
                MY
              </S.Info>
              <S.MarketIcon
                onClick={() => {
                  navigate('/market');
                }}
                src={MarketIcon}
                alt="마켓"
              />
            </S.Etc>
          </S.SidePart>
        </>
      )}
    </S.Head>
  );
};

export default Header;
