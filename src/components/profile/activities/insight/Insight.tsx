import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './Insight.Style';
import Item from './Item';
import { getInsight } from '../../../../api/Profile';
import NoInsightIcon from '../../../../assets/icons/NoInsightIcon.svg';
import { useNavigate } from 'react-router-dom';

interface InsightProps {
  topic: string;
  newsId: number;
  userComment: string;
}

const Insight = () => {
  const [insightList, setInsightList] = useState<InsightProps[]>([]);
  const [nextPage, setNextPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const insight = await getInsight(nextPage);
      if (insight && insight.insightList.length > 0) {
        setInsightList((prev) => [...prev, ...insight.insightList]);
        setNextPage((prev) => prev + 1);
        setHasMore(insight.hasNext);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to fetch insights:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, nextPage]);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { rootMargin: '20px', threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [fetchData, hasMore, isLoading]);

  return (
    <S.Container>
      <S.Text>나의 인사이트</S.Text>
      {insightList.length > 0 ? (
        <S.Insight>
          {insightList.map((item) => (
            <Item
              key={item.newsId}
              title={item.topic}
              comment={item.userComment}
              id={item.newsId}
            />
          ))}
          <div ref={observerRef} style={{ height: '1px' }} />
        </S.Insight>
      ) : (
        <S.NoContent>
          <S.Icon src={NoInsightIcon} />
          <p>
            이번 달은 생각 정리를 작성하지 않았어요. <br /> 오늘의 생각 정리를 살펴보러 가볼까요?
          </p>
          <S.Button
            onClick={() => {
              navigate('/home');
            }}
          >
            오늘의 생각 정리 보러가기
          </S.Button>
        </S.NoContent>
      )}
    </S.Container>
  );
};

export default Insight;
