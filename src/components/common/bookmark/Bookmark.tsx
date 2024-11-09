import { MouseEvent } from 'react';
import * as S from './Bookmark.Style';
import BookmarkIcon from '../../../assets/icons/BookmarkIcon.svg';
import BookmarkActiveIcon from '../../../assets/icons/BookmarkActiveIcon.svg';

interface BookmarkProps {
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

/**
 *
 * @param isSelected - true일 경우 북마크가 된 것임
 * @param onClick - 북마크 버튼을 누르면 수행할 함수
 * @returns
 */
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
