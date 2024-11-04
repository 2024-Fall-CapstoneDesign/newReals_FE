import * as S from './KeywordStyle';

interface KeywordProps {
  children: string;
  isActive: boolean;
  onToggle: (keyword: string) => void;
}

const Keyword = ({ children, isActive, onToggle }: KeywordProps) => {
  const handleClick = () => {
    onToggle(children);
  };

  return (
    <S.Keyword $isActive={isActive} onClick={handleClick}>
      {children}
    </S.Keyword>
  );
};

export default Keyword;
