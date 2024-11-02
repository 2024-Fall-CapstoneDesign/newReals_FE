import * as S from './KeywordStyle';
import { useKeywordContext } from '../context/KeywordContext';

interface KeywordProps {
  children: string;
}

const Keyword = ({ children }: KeywordProps) => {
  const { isActives, setIsActives } = useKeywordContext();

  const isActive = isActives.includes(children);

  const handleClick = () => {
    setIsActives((prevIsActives) => {
      const newIsActives = prevIsActives.includes(children)
        ? prevIsActives.filter((keyword) => keyword !== children)
        : [...prevIsActives, children];

      return newIsActives;
    });
  };

  return (
    <S.Keyword $isActive={isActive} onClick={handleClick}>
      {children}
    </S.Keyword>
  );
};

export default Keyword;
