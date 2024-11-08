import * as S from './Home.Style';
import Cartoon from '../../components/home/cartoon/Cartoon';
import HeadNews from '../../components/common/headNews/HeadNews';
import { useEffect, useState } from 'react';
import LatestNews from '../../components/home/latestNews/LatestNews';

const MOCKDATA = [
  {
    id: 1,
    category: '정치',
    subCategory: '행정',
    keyword: '#키워드',
    title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...1',
    quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  },
  {
    id: 2,
    category: '정치',
    subCategory: '행정',
    keyword: '#키워드',
    title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...2',
    quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  },
  {
    id: 3,
    category: '정치',
    subCategory: '행정',
    keyword: '#키워드',
    title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...3',
    quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  },
  {
    id: 4,
    category: '사회',
    subCategory: '행정',
    keyword: '#키워드',
    title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...4',
    quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  },
  {
    id: 5,
    category: '경제',
    subCategory: '행정',
    keyword: '#키워드',
    title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...5',
    quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % MOCKDATA.length);
  };

  const handlePreviousNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + MOCKDATA.length) % MOCKDATA.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(handleNextNews, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const currentNews = MOCKDATA[currentIndex];

  return (
    <>
      <HeadNews
        id={currentNews.id}
        category={currentNews.category}
        subcategory={currentNews.subCategory}
        keyword={currentNews.keyword}
        title={currentNews.title}
        quiz={currentNews.quiz}
        index={currentIndex}
        onPrevious={handlePreviousNews}
        onNext={handleNextNews}
        onPaused={togglePause}
        isPaused={isPaused}
      />
      <S.Container>
        <Cartoon
          imageUrl={[
            'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
            'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
            'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
            'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
          ]}
        />
        <LatestNews />
      </S.Container>
    </>
  );
};

export default Home;
