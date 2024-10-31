import * as S from './TagStyle';

interface TagProps {
  children: React.ReactNode;
  color: 'gray' | 'purple';
  size?: 'small' | 'large';
}

const Tag = ({ children, color, size = 'small' }: TagProps) => {
  return (
    <S.Tag $color={color} $size={size}>
      {children}
    </S.Tag>
  );
};

export default Tag;
