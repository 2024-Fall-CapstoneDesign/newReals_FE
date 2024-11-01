import { MouseEvent } from 'react';
import * as S from './BookmarkStyle';

interface BookmarkProps {
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Bookmark = ({ isSelected, onClick }: BookmarkProps) => {
  return (
    <S.Bookmark onClick={onClick}>
      {isSelected ? (
        <S.Icon src="/icons/BookmarkActiveIcon.svg" alt="bookmark-active" />
      ) : (
        <S.Icon src="/icons/BookmarkIcon.svg" alt="bookmark-active" />
      )}
    </S.Bookmark>
  );
};

export default Bookmark;
