import Modal from '../../common/modal/Modal';
import * as S from './EditProfile.Style';
import XIcon from '../../../assets/icons/XIcon.svg';
import { useState } from 'react';
import Button from '../../common/button/Button';

interface EditProfileProps {
  onClose: () => void;
}

//@todo
// 1. 머지되면 프로필 이미지 갈아끼우기
// 2. 이미지 용량, 파일 확장자 제한하기
// 3. 적용 버튼 클릭 시 바뀌는 부분
// 4. 인풋 자세히
// 5. 이미지 변경 클릭 시 file 선택하게 하는 것 해야함 !

const EditProfile = ({ onClose }: EditProfileProps) => {
  const [user, setUser] = useState({ nickname: '', Image: '' });
  const [error, setError] = useState({ isError: false, errorMessage: '' });

  return (
    <Modal onClose={onClose}>
      <S.Modal>
        <S.Content>
          <S.Header>
            프로필 편집
            <img src={XIcon} alt="닫기" onClick={onClose} />
          </S.Header>
          <S.Container>
            <label htmlFor="nickname">이름</label>
            <S.InputContainer>
              <S.Input id="nickname" value={user.nickname} />
              <S.HelperText $isError={error.isError}>
                한글, 영문, 숫자 혼용 가능(한글 기준 10자 이내)
              </S.HelperText>
            </S.InputContainer>
          </S.Container>
          <S.Line />
          <S.Container>
            프로필 이미지
            <S.Profile>
              <S.Image>
                <S.ImageD />
                <S.Text>현재 이미지</S.Text>
              </S.Image>
              <S.EditImage>
                <S.Text>
                  프로필 이미지는 가로/세로 84px 크기로 원형 크롭이 되기 때문에 인물이나 요소가
                  중앙에 있는 이미지를 추천해요.
                </S.Text>
                <S.ImageButtonContainer>
                  <S.ImageButton>이미지 변경</S.ImageButton>
                  <S.ImageButton>이미지 삭제</S.ImageButton>
                </S.ImageButtonContainer>
              </S.EditImage>
            </S.Profile>
          </S.Container>
          <S.ButtonContainer>
            <Button buttonStyle="profile" onClick={onClose}>
              취소
            </Button>
            <Button
              buttonStyle="modal"
              onClick={() => {
                console.log('백엔드 연동할 부분이겠죠?');
              }}
            >
              적용
            </Button>
          </S.ButtonContainer>
        </S.Content>
      </S.Modal>
    </Modal>
  );
};

export default EditProfile;
