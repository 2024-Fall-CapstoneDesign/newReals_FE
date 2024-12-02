import { useMemo, useRef, useState } from 'react';
import * as S from './EasySummary.Style';
import InfoPart from './InfoPart';

interface EasySumProps {
  content: string;
  dictionary?: Record<string, string>;
  url: string;
}

/**
 *
 * @param content - 들어갈 내용 (쉬운 설명)
 * @param dictionary - 용어를 키로 하고 해설을 값으로 가진 객체
 * @param url - 원본 뉴스 url
 * @returns
 */

const EasySummary = ({ content, dictionary, url }: EasySumProps) => {
  console.log(dictionary);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const termRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  const highlightedContent = useMemo(() => {
    if (!dictionary) return content;

    // 정규식을 사용해 텍스트를 용어 단위로 나누기
    const terms = Object.keys(dictionary).sort((a, b) => b.length - a.length); // 긴 용어 우선 처리
    const termRegex = new RegExp(`(${terms.join('|')})`, 'g');

    const splitContent = content.split(termRegex); // 용어를 기준으로 본문 분리
    return splitContent.map((part, index) => {
      if (dictionary[part]) {
        // 용어에 매칭된 경우
        return (
          <S.Highlight
            key={`${part}-${index}`}
            onClick={() => handleWordClick(part)}
            ref={(el) => {
              termRefs.current[part] = el; // 각 용어의 ref 저장
            }}
          >
            {part}
          </S.Highlight>
        );
      }
      // 일반 텍스트
      return part;
    });
  }, [content, dictionary]);

  const handleWordClick = (term: string) => {
    const rect = termRefs.current[term]?.getBoundingClientRect();
    if (rect) {
      setTooltipPosition({
        top: rect.bottom + window.scrollY, // 용어 바로 밑에 위치
        left: rect.left + rect.width / 2 + window.scrollX, // 용어 중앙에 맞추기
      });
    }
    setIsOpen((prev) => (selectedTerm === term ? !prev : true)); // 같은 단어 클릭 시 토글, 다른 단어 클릭 시 열기
    setSelectedTerm(term);
  };

  return (
    <S.EasySumPart>
      <S.ContentPart>{highlightedContent}</S.ContentPart>
      {isOpen && selectedTerm && dictionary && (
        <S.Tooltip $tooltipPosition={tooltipPosition}>
          <InfoPart info={dictionary[selectedTerm]} />
        </S.Tooltip>
      )}
      <S.Navi
        onClick={() => {
          window.open(url, '_blank');
        }}
      >
        원본 뉴스 보러 가기
        <S.Arrow />
      </S.Navi>
    </S.EasySumPart>
  );
};

export default EasySummary;
