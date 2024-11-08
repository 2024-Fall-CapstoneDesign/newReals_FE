import CoinIcon from '../../../assets/icons/CoinIcon.svg';
import * as S from './PointAlertStyle';

const PointAlert = () => {
  return (
    <S.AddPoint>
      +포인트
      <S.CoinImg src={CoinIcon} alt="코인" />
      5코인을 획득했어요
    </S.AddPoint>
  );
};

export default PointAlert;
