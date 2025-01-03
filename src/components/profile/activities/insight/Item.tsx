import { useNavigate } from 'react-router-dom';
import * as S from './Item.Style';
import RightArrowIcon from '../../../../assets/icons/RightArrowIcon.svg?react';
import Tag from '../../../common/tag/Tag';

interface ItemProps {
  title: string;
  comment: string;
  id: number;
}

const Item = ({ title, comment, id }: ItemProps) => {
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/newsDetail/${id}`);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.GoToDetail onClick={handleClickDetail}>
          <S.DetailText>자세히 보기</S.DetailText>
          <RightArrowIcon />
        </S.GoToDetail>
      </S.Header>
      <S.Comment>
        <Tag color="purple">나의 의견</Tag>
        <S.Text>{comment}</S.Text>
      </S.Comment>
    </S.Container>
  );
};

export default Item;
