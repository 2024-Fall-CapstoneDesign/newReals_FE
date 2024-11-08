import * as S from './Button.Style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle?: 'quiz' | 'modal';
}

/**
 *
 * @param children - 버튼의 글씨
 * @param buttonStyle - (optional) 전달하지 않을 경우 기본 버튼, quiz, modal 전달 시 해당하는 부분에 맞게 적용
 * @param props - 기본 버튼 속성으로, `type`, `onClick`, `disabled` 등 HTML 버튼의 기본 속성을 사용 가능
 * @returns
 */
const Button = ({ children, buttonStyle, ...props }: ButtonProps) => {
  return (
    <S.Button $buttonStyle={buttonStyle} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
