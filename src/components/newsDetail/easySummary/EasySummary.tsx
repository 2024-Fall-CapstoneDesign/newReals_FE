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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const termRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  const highlightedContent = useMemo(() => {
    if (!dictionary) return content;

    let result = [];
    const terms = Object.keys(dictionary);

    let remainingContent = content;

    terms.forEach((term) => {
      const parts = remainingContent.split(term);

      // 용어가 발견된 경우
      if (parts.length > 1) {
        result.push(parts[0]); // 용어 앞부분
        result.push(
          <S.Highlight
            key={term}
            onClick={() => {
              handleWordClick(term);
            }}
            ref={(el) => {
              termRefs.current[term] = el; // 각 용어의 ref 저장
            }}
          >
            {term}
          </S.Highlight>,
        );
        remainingContent = parts.slice(1).join(term); // 용어 뒷부분
      }
    });
    // 남은 부분을 추가
    result.push(remainingContent);

    return result;
  }, [content, dictionary]);

  const handleWordClick = (term: string) => {
    const rect = termRefs.current[term]?.getBoundingClientRect();
    if (rect) {
      setTooltipPosition({
        top: rect.bottom + window.scrollY, // 용어 바로 밑에 위치
        left: rect.left + rect.width / 2 + window.scrollX, // 용어 왼쪽에 맞추기
      });
    }
    setIsOpen((prev) => !prev);
    setSelectedTerm(term);
  };

  return (
    <S.EasySumPart>
      <S.ContentPart>{highlightedContent}</S.ContentPart>
      {isOpen && selectedTerm && dictionary && (
        <div
          style={{
            position: 'absolute', // 절대 위치로 배치
            top: tooltipPosition.top, // 계산된 top 위치
            left: tooltipPosition.left, // 계산된 left 위치
            transform: 'translateX(-50%)',
            zIndex: 10,
            marginTop: '0px', // 용어와의 간격
          }}
        >
          <InfoPart info={dictionary[selectedTerm]} />
        </div>
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
