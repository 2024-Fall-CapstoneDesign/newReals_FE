import { MouseEvent } from 'react';
import * as S from './BookmarkStyle';
import BookmarkIcon from '../../../assets/icons/BookmarkIcon.svg';
import BookmarkActiveIcon from '../../../assets/icons/BookmarkActiveIcon.svg';

interface BookmarkProps {
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Bookmark = ({ isSelected, onClick }: BookmarkProps) => {
  return (
    <S.Bookmark onClick={onClick}>
      {isSelected ? (
        <S.Icon src={BookmarkActiveIcon} alt="bookmark-active" />
      ) : (
        <S.Icon src={BookmarkIcon} alt="bookmark-active" />
      )}
    </S.Bookmark>
  );
};

export default Bookmark;
