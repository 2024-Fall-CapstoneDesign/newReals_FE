import * as S from './PageButtonStyle';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon.svg?react';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';

interface PageButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: 'left' | 'right';
}

const PageButton = ({ children, onClick, type }: PageButtonProps) => {
  return (
    <S.PageButton onClick={onClick} $type={type}>
      {type === 'left' && <LeftArrowIcon />}
      {children}
      {type === 'right' && <RightArrowIcon />}
    </S.PageButton>
  );
};

export default PageButton;
