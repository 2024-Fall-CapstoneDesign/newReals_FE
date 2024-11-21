import * as S from './Profile.Style';
import ProfileCard from '../../components/profile/profileCard/ProfileCard';
import Calendar from '../../components/profile/calendar/Calendar';
import { useState } from 'react';
import EditProfile from '../../components/profile/editProfile/EditProfile';
import KeywordModal from '../../components/profile/keywordModal/KeywordModal';
import Chip from '../../components/common/chip/Chip';
import Activities from '../../components/profile/activities/Activities';
import Report from '../../components/profile/report/Report';

const chips = ['나의 활동', '나의 분석 레포트'];

const Profile = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openKeywordModal, setOpenKeywordModal] = useState(false);
  const [selectedChip, setSelectedChip] = useState('나의 활동');

  const handleEditModal = () => {
    setOpenEditModal((prev) => !prev);
  };

  const handleKeywordModal = () => {
    setOpenKeywordModal((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Title>마이페이지</S.Title>
      <S.Content>
        <S.LeftContent>
          <ProfileCard
            image="https://github.com/user-attachments/assets/73482885-d02e-4ed4-a371-d78a527b6355"
            onClickEditProfile={handleEditModal}
            onClickEditKeyWord={handleKeywordModal}
            keywords={['장애인 권리', '대기업 동향', '세계 경제 전망', '키워드', ' 키워드']}
            coin={157}
          />
          <Calendar />
        </S.LeftContent>

        <S.RightContent>
          <S.ChipContainer>
            {chips.map((chip) => (
              <Chip
                key={chip}
                isSelected={selectedChip === chip}
                onClick={() => setSelectedChip(chip)}
              >
                {chip}
              </Chip>
            ))}
          </S.ChipContainer>
          {selectedChip === '나의 활동' ? <Activities /> : <Report />}
        </S.RightContent>
      </S.Content>
      {openEditModal && <EditProfile onClose={handleEditModal} />}
      {openKeywordModal && <KeywordModal onClose={handleKeywordModal} />}
    </S.Container>
  );
};

export default Profile;
