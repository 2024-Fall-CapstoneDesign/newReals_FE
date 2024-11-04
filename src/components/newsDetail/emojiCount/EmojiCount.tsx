import * as S from './EmojiCountStyle';
import EmojiesIcon from '../../../assets/icons/EmojiesIcon.svg';

interface EmojiCountProps {
  count: number;
  isActive: boolean;
}
const EmojiCount = ({ count, isActive }: EmojiCountProps) => {
  return (
    <S.Container $isActive={isActive}>
      <img src={EmojiesIcon} alt="이모지들" />
      {count}
    </S.Container>
  );
};

export default EmojiCount;
