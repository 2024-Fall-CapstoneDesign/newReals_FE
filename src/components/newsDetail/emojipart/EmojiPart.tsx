import * as S from './EmojiPart.Style';
import GoodEmoji from '../../../assets/icons/GoodEmoji.svg';
import HeartEmoji from '../../../assets/icons/HeartEmoji.svg';
import AngryEmoji from '../../../assets/icons/AngryEmoji.svg';

const ICONS = [
  { imoji: GoodEmoji, content: '좋아요', count: 52 },
  { imoji: HeartEmoji, content: '공감해요', count: 54 },
  { imoji: AngryEmoji, content: '화나요', count: 46 },
];

const EmojiPart = () => {
  return (
    <S.EmojiClickPart>
      이 기사에 대해 어떻게 생각하시나요?
      <S.MainPart>
        <S.ClickPart>
          {ICONS.map((icon) => (
            <>
              <S.IconPart src={icon.imoji} />
            </>
          ))}
        </S.ClickPart>
      </S.MainPart>
    </S.EmojiClickPart>
  );
};

export default EmojiPart;
