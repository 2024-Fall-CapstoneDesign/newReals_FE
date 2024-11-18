import * as S from './StartService.Style';
import kakaoButton from '../../../assets/icons/kakaoButton.svg';

const StartService = () => {
  return (
    <S.Container>
      <S.StartMent>
        그럼 이제 <S.Purple>newReals</S.Purple>를 시작해볼까요?
      </S.StartMent>
      <S.KakaoButton src={kakaoButton} alt="카카오로그인" />
    </S.Container>
  );
};

export default StartService;
