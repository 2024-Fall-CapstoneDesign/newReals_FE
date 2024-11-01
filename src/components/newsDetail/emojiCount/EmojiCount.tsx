import * as S from './EmojiCountStyle';

interface EmojiCountProps {
  count: number;
  isActive: boolean;
}
const EmojiCount = ({ count, isActive }: EmojiCountProps) => {
  return (
    <S.Container $isActive={isActive}>
      <img src="/icons/EmojiesIcon.svg" alt="이모지들" />
      {count}
    </S.Container>
  );
};

export default EmojiCount;
