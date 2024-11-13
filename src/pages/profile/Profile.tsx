import * as S from './Profile.Style';
import AnalysisCard from '../../components/profile/analysisCard/AnalysisCard';
import ProfileCard from '../../components/profile/profileCard/ProfileCard';
import Quiz from '../../components/profile/quiz/Quiz';
import Calendar from '../../components/profile/calendar/Calendar';
import Scrap from '../../components/profile/scrap/Scrap';
import { useState } from 'react';
import EditProfile from '../../components/profile/modal/EditProfile';

const Profile = () => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleEditModal = () => {
    setOpenEditModal((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Title>마이페이지</S.Title>
      <S.Content>
        <S.LeftContent>
          <ProfileCard
            image="https://github.com/user-attachments/assets/73482885-d02e-4ed4-a371-d78a527b6355"
            onClickEditProfile={handleEditModal}
            onClickEditKeyWord={() => {
              console.log('구현해야함');
            }}
            keywords={['장애인 권리', '대기업 동향', '세계 경제 전망', '키워드', ' 키워드']}
            coin={157}
          />
          <Calendar />
        </S.LeftContent>

        <S.RightContent>
          <S.RightHead>
            <AnalysisCard nickname="김뉴스" />
            <Quiz />
          </S.RightHead>
          <Scrap />
        </S.RightContent>
      </S.Content>
      {openEditModal && <EditProfile onClose={handleEditModal} />}
    </S.Container>
  );
};

export default Profile;
