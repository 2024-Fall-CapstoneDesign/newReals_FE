import * as S from './ProfileCard.Style';
import EditIcon from '../../../assets/icons/EditIcon.svg';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';
import CoinIcon from '../../../assets/icons/CoinIcon.svg';
import InfoIcon from '../../../assets/icons/InfoIcon.svg';
import Tag from '../../common/tag/Tag';
import ProfileImage from '../profileImage/ProfileImage';
import { useState } from 'react';
import CoinExplain from './coinExplain/CoinExplain';

interface ProfileCardProps {
  image: string;
  onClickEditProfile: () => void;
  onClickEditKeyWord: () => void;
  keywords: string[];
  coin: number;
}

const ProfileCard = ({
  image,
  onClickEditProfile,
  onClickEditKeyWord,
  keywords,
  coin,
}: ProfileCardProps) => {
  const [openInfo, setOpenInfo] = useState(false);

  const handleClickInfo = () => {
    setOpenInfo((prev) => !prev);
  };

  return (
    <S.container>
      <S.Profile>
        <ProfileImage image={image} />
        <S.IconContainer>
          <S.Icon src={EditIcon} alt="프로필 편집" onClick={onClickEditProfile} />
        </S.IconContainer>
        김뉴스
      </S.Profile>
      <S.KeywordContainer>
        <S.KeywordHeader>
          나의 관심 키워드
          <S.Edit onClick={onClickEditKeyWord}>
            키워드 편집
            <S.Icon as={RightArrowIcon} alt="오른쪽 화살표" />
          </S.Edit>
        </S.KeywordHeader>
        <S.Keywords>
          {keywords.map((keyword, index) => (
            <Tag key={index} color="purple">
              {keyword}
            </Tag>
          ))}
        </S.Keywords>
      </S.KeywordContainer>
      <S.Coin>
        <S.CoinText>
          <S.Icon src={CoinIcon} alt="코인" />
          <p>내 코인 </p>
          <S.CoinNumber>{coin}코인</S.CoinNumber>
        </S.CoinText>
        <S.Info src={InfoIcon} alt="코인 정보" onClick={handleClickInfo} />
        {openInfo && <CoinExplain />}
      </S.Coin>
    </S.container>
  );
};

export default ProfileCard;
