import { useEffect, useState } from 'react';
import EmojiPart from '../../components/newsDetail/emojipart/EmojiPart';
import ArticleHeader from '../../components/newsDetail/articleHeader/ArticleHeader';
import * as S from './NewsDetail.Style';
import AIPart from '../../components/newsDetail/aiPart/AIPart';
import PageButton from '../../components/common/button/PageButton';
import Quiz from '../../components/newsDetail/quiz/Quiz';
import PoliticsImg1 from '../../assets/images/PoliticsImg1.png';
import ThinkingPart from '../../components/newsDetail/thinkingPart/ThinkingPart';
import api from '../../api/instance';
import { useLocation, useParams } from 'react-router-dom';

const MOCKDATA = {
  id: 1,
  category: '정치',
  subCategory: '행정',
  keyword: '키워드',
  date: '2024-11-10',
  title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...1',
  count: 46,
  img: PoliticsImg1,
  content:
    '윤석열 대통령은 필리핀을 국빈 방문해 무역, 투자, 공급망, 에너지 등 다양한 분야에서 협력을 강화하겠다고 했어요. 그는 필리핀과의 관계 발전이 동포 사회에 이익이 될 것이라고 했고, 필리핀 대통령과 정상회담을 열어 양국 간 협력을 논의할 예정이에요. 또한, 비즈니스 포럼을 개최하고, 싱가포르와 라오스를 순방해 아세안 정상회의에 참석할 계획이에요. 윤석열 대통령은 필리핀을 국빈 방문해 무역, 투자, 공급망, 에너지 등 다양한 분야에서 협력을 강화하겠다고 했어요. 그는 필리핀과의 관계 발전이 동포 사회에 이익이 될 것이라고 했고, 필리핀 대통령과 정상회담을 열어 양국 간 협력을 논의할 예정이에요. 또한, 비즈니스 포럼을 개최하고, 싱가포르와 라오스를 순방해 아세안 정상회의에 참석할 계획이에요.',
  dictionary: {
    필리핀: '저도몰라요',
    국빈: '국제적으로 머..암튼 그런거에요랄라라라라라라국빈국빈국빈해요',
    포럼: '안녕하세요저는김진아포럼은영어포도포도포도포럼포럼해요 이 문맥에서는 이게 이런 뜻이고 이런 말이에요',
  },
  url: 'https://www.breaknews.com/1060642',
  topic: '"우리나라 무역 강화"에 대해 어떻게 생각하시나요?',
  quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  comment: '이게해설이에요',
  left: '북한 오물풍선',
  right: '의료 대란 논의',
};

interface NewsDataProps {
  category: string;
  subCategory: string;
  keyword: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string;
  newsUrl: string;
  uploadDate: string;
  isScrapped: boolean;
  good: number;
  bad: number;
  interesting: number;
  totalLikes: number;
  viewCount: number;
  termMap: Record<string, string>;
}

interface QuizDataProps {
  problem: string;
  answer: boolean;
  comment: string;
  solved: boolean;
}

interface InsightDataProps {
  topic: string;
  userComment: string;
  aiComment: string;
  pros: string;
  cons: string;
  neutral: string;
}

const accessToken = localStorage.getItem('access_token');

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state: keyword } = location;
  const [newsData, setNewsData] = useState<NewsDataProps | null>(null);
  const [quizData, setQuizData] = useState<QuizDataProps | null>(null);
  const [insightData, setInsightData] = useState<InsightDataProps | null>(null);

  const getNews = async (id: number) => {
    try {
      let res;
      if (keyword) {
        res = await api.get(`/news/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: keyword,
        });
      } else {
        res = await api.get(`/news/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
      console.log('응답 데이터:', res.data.data);
      setNewsData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuiz = async (id: number) => {
    try {
      const res = await api.get(`/news/quiz/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('응답 데이터:', res.data.data);
      setQuizData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getInsight = async (id: number) => {
    try {
      const res = await api.get(`/news/insight/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });
      console.log('응답 데이터:', res.data.data);
      setInsightData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews(Number(id));
    getQuiz(Number(id));
    getInsight(Number(id));
  }, [id]); // 빈 의존성 배열: 컴포넌트 마운트 시 한 번만 실행

  return (
    <S.NewsDetail>
      {newsData && (
        <>
          <ArticleHeader
            category={newsData.category}
            subCategory={newsData.subCategory}
            keyword={newsData.keyword}
            title={newsData.title}
            date={newsData.uploadDate}
            count={newsData.totalLikes}
            isScrapped={newsData.isScrapped}
          />
          <S.Content>
            <S.NewsPart>
              {newsData.imageUrl && <S.NewsImg src={newsData.imageUrl} />}
              <AIPart
                summary={newsData.summary}
                description={newsData.description}
                termMap={newsData.termMap}
                newsUrl={newsData.newsUrl}
              />
              {insightData ? (
                <ThinkingPart
                  topic={insightData.topic}
                  userComment={insightData.userComment}
                  aiComment={insightData.aiComment}
                  pros={insightData.pros}
                  cons={insightData.cons}
                  neutral={insightData.neutral}
                  onCommentUpdated={() => getInsight(Number(id))}
                />
              ) : (
                <EmojiPart
                  good={newsData.good}
                  bad={newsData.bad}
                  interesting={newsData.interesting}
                />
              )}
              <S.PageNavigate>
                <PageButton children={MOCKDATA.left} buttonStyle="left" />
                <PageButton children={MOCKDATA.right} buttonStyle="right" />
              </S.PageNavigate>
            </S.NewsPart>
            {quizData && (
              <S.QuizPart>
                <Quiz
                  quiz={quizData.problem}
                  isSolved={quizData.solved}
                  answer={quizData.answer}
                  comment={quizData.comment}
                  onCommentUpdated={() => getQuiz(Number(id))}
                />
              </S.QuizPart>
            )}
          </S.Content>
        </>
      )}
    </S.NewsDetail>
  );
};

export default NewsDetail;
