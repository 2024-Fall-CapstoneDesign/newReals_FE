import * as S from './FooterStyle';

const ICON_ITEM = [
  { name: 'notion', icon: '/icons/NotionIcon.svg', url: 'https://www.naver.com' },
  { name: 'instagram', icon: '/icons/InstagramIcon.svg', url: 'https://www.naver.com' },
  { name: 'mail', icon: '/icons/MailIcon.svg', url: 'https://www.naver.com' },
]; // 추후 링크들 수정 필요!

const MEMBER_DATA = ['김진아', '나현진', '안연아', '윤예은', '이서현'];

const Footer = () => {
  return (
    <S.Footer>
      <S.Logo>newReals</S.Logo>
      <S.Content>
        <S.About>
          <S.Title>About</S.Title>
          <S.IconContainer>
            {ICON_ITEM.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                <S.Icon src={item.icon} alt={item.name} />
              </a>
            ))}
          </S.IconContainer>
        </S.About>
        <S.Member>
          <S.Title>Member</S.Title>
          <S.NameContainer>
            {MEMBER_DATA.map((member, index) => (
              <>
                <S.Name key={index}>{member}</S.Name>
                {index < MEMBER_DATA.length - 1 && <S.Divider />}
              </>
            ))}
          </S.NameContainer>
        </S.Member>
      </S.Content>
      <S.Copyright>COPYRIGHT ⓒnewReals. All Rights Reserved.</S.Copyright>
    </S.Footer>
  );
};

export default Footer;
