import * as S from './ProfileImage.Style';

interface ProfileImageProps {
  image: string;
}

const ProfileImage = ({ image }: ProfileImageProps) => {
  return <S.Image src={image} alt="프로필 사진" />;
};

export default ProfileImage;
