import * as S from './ButtonStyle';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'quiz';
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} $type={type}>
      {children}
    </S.Button>
  );
};

export default Button;
