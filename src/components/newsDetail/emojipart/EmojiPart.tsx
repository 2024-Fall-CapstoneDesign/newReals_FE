import * as S from './EmojiPart.Style';
import GoodEmoji from '../../../assets/icons/GoodEmoji.svg';
import HeartEmoji from '../../../assets/icons/HeartEmoji.svg';
import AngryEmoji from '../../../assets/icons/AngryEmoji.svg';
import IconPart from './IconPart';
import { useEffect, useState } from 'react';
import { sendLikes } from '../../../api/NewsDetail';

interface EmojiProps {
  id: number;
  action: number;
  good: number;
  bad: number;
  interesting: number;
}

const EmojiPart = ({ id, action, good, bad, interesting }: EmojiProps) => {
  const ICONS = [
    { id: 0, imoji: GoodEmoji, content: '좋아요', count: good },
    { id: 1, imoji: HeartEmoji, content: '공감해요', count: interesting },
    { id: 2, imoji: AngryEmoji, content: '화나요', count: bad },
  ];
  const [selectedIcon, setSelectedIcon] = useState<number | null>(action);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(
    ICONS.reduce((acc, icon) => ({ ...acc, [icon.id]: icon.count ?? 0 }), {}),
  );

  useEffect(() => {
    setSelectedIcon(action);
    setLikeCounts(ICONS.reduce((acc, icon) => ({ ...acc, [icon.id]: icon.count ?? 0 }), {}));
  }, [id, action, good, bad, interesting]);

  const handleClickLikeButton = async (selectedId: number) => {
    try {
      const isSuccess = await sendLikes(Number(id), selectedId); // 데이터 저장 요청
      if (isSuccess) {
        setSelectedIcon((prev) => {
          // 이전 선택된 이모지가 있다면, 카운트를 감소시킵니다
          if (prev !== null) {
            setLikeCounts((counts) => ({
              ...counts,
              [prev]: counts[prev] - 1,
            }));
          }
          // 새로 선택된 이모지가 같으면 선택 해제, 다르면 카운트 증가
          if (prev === selectedId) {
            return null;
          } else {
            setLikeCounts((counts) => ({
              ...counts,
              [selectedId]: counts[selectedId] + 1,
            }));
            return selectedId;
          }
        });
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <S.EmojiClickPart>
      이 기사에 대해 어떻게 생각하시나요?
      <S.MainPart>
        <S.ClickPart>
          {ICONS.map((icon) => (
            <IconPart
              key={icon.id}
              src={icon.imoji}
              content={icon.content}
              count={likeCounts[icon.id]}
              isSelected={selectedIcon === icon.id}
              onClick={() => handleClickLikeButton(icon.id)}
            />
          ))}
        </S.ClickPart>
      </S.MainPart>
    </S.EmojiClickPart>
  );
};

export default EmojiPart;
