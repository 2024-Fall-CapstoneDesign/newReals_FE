import * as S from './Cartoon.Style';

interface CartoonProps {
  imageUrl: string[];
}

/**
 *
 * @param imageUrl - 만화 네컷이 담긴 이미지 배열
 * @returns
 */
const Cartoon = ({ imageUrl }: CartoonProps) => {
  return (
    <S.Cartoon>
      <S.TextContainer>
        <S.Title>당신이 잠든 사이에</S.Title>
        <S.DescrtionContainer>
          <S.Description>잠든 동안에 있었던 주요 뉴스를 4컷 만화로 확인해보세요</S.Description>
          <S.GoNews
            onClick={() => {
              console.log('이동 구현해야한다.');
            }}
          >
            <S.Description>뉴스 보러 가기</S.Description>
            <S.Icon />
          </S.GoNews>
        </S.DescrtionContainer>
      </S.TextContainer>
      <S.ImageContainer>
        {imageUrl.map((url, index) => (
          <S.Image key={index} src={url} alt="만화" />
        ))}
      </S.ImageContainer>
    </S.Cartoon>
  );
};

export default Cartoon;
