import * as S from './HeadNewsStyle';
import { getRandomImage } from './GetRandomImage';
import Tag from '../tag/Tag';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon.svg?react';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';
import PauseIcon from '../../../assets/icons/PauseIcon.svg';
import PlayIcon from '../../../assets/icons/PlayIcon.svg';

interface HeadNewsProps {
  id: number;
  category: string;
  subcategory: string;
  keyword: string;
  title: string;
  quiz: string;
  index: number;
  onPrevious: () => void;
  onNext: () => void;
  onPaused: () => void;
  isPaused: boolean;
}

const HeadNews = ({
  id,
  category,
  subcategory,
  keyword,
  title,
  quiz,
  index,
  onPrevious,
  onNext,
  onPaused,
  isPaused,
}: HeadNewsProps) => {
  const imageUrl = getRandomImage({ category: category });
  const navigate = useNavigate();

  return (
    <S.HeadNews $imageUrl={imageUrl || ''}>
      <S.Container>
        <S.TextContainer>
          <S.Head>
            <p>오늘의 뉴스</p>
            <S.Tags>
              <Tag color="gray" size="large">
                {`${category} > ${subcategory}`}
              </Tag>
              <Tag color="gray" size="large">
                {keyword}
              </Tag>
            </S.Tags>
          </S.Head>
          <S.Title>{title}</S.Title>
        </S.TextContainer>
        <S.Quiz
          onClick={() => {
            navigate(`/newsDetail/${id}`);
          }}
        >
          <Tag color="purple" size="large">
            O/X 퀴즈
          </Tag>
          Q. {quiz}
        </S.Quiz>
      </S.Container>
      <S.Navigation>
        <LeftArrowIcon onClick={onPrevious} />
        {index + 1} / 5
        <img src={isPaused ? PlayIcon : PauseIcon} alt="멈춤" onClick={onPaused} />
        <RightArrowIcon onClick={onNext} />
      </S.Navigation>
    </S.HeadNews>
  );
};

export default HeadNews;
