import * as S from './Profile.Style';
import AnalysisCard from '../../components/profile/analysisCard/AnalysisCard';
import ProfileCard from '../../components/profile/profileCard/ProfileCard';
import Quiz from '../../components/profile/quiz/Quiz';
import SearchBar from '../../components/common/header/SearchBar';
import PageNation from '../../components/common/pageNation/PageNation';
import Card from '../../components/common/card/Card';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/profile/calendar/Calendar';

const MOCK_CARDS = [
  {
    id: 1,
    imageUrl:
      'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
    isSelected: true,
    category: '경제>투자',
    keyword: '#주식',
    title: '주식 시장, 다음 주에 급등 예상',
    description:
      '전문가들은 다음 주 주식 시장이 급등할 것으로 예상하고 있습니다. 투자자들은 기회를 놓치지 않기 위해 신속한 대응을 준비하고 있습니다...',
    date: '2024-10-01',
  },
  {
    id: 2,
    imageUrl: '',
    isSelected: false,
    category: '정치>외교',
    keyword: '#국제관계',
    title: '미국과 중국, 무역 협상 진전',
    description:
      '미국과 중국이 무역 협상에서 긍정적인 진전을 이루었습니다. 양국의 관계가 개선될지 여부에 대해 관심이 집중되고 있습니다...',
    date: '2024-10-02',
  },
  {
    id: 3,
    imageUrl:
      'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
    isSelected: true,
    category: '사회>교육',
    keyword: '#학업',
    title: '2024년 대입 제도 개편, 어떻게 바뀌나?',
    description:
      '2024년부터 대입 제도가 새로운 방향으로 개편됩니다. 학생들과 학부모들의 혼란을 줄이기 위해 정부가 준비하고 있는 내용은 다음과 같습니다...',
    date: '2024-10-03',
  },
  {
    id: 4,
    imageUrl: '',
    isSelected: false,
    category: '환경>에너지',
    keyword: '#재생에너지',
    title: '재생에너지 산업, 앞으로의 전망은?',
    description:
      '전 세계적으로 재생에너지 산업이 성장하고 있습니다. 향후 10년간 이 산업이 얼마나 성장할지에 대해 전문가들이 예측하고 있습니다...',
    date: '2024-10-04',
  },
  {
    id: 5,
    imageUrl: '',
    isSelected: true,
    category: '문화>예술',
    keyword: '#전시회',
    title: '서울, 현대 미술 전시회 개막',
    description:
      '서울에서 열리는 현대 미술 전시회가 많은 이목을 끌고 있습니다. 국내외 유명 예술가들이 참여하여 다양한 작품을 선보입니다...',
    date: '2024-10-05',
  },
  {
    id: 6,
    imageUrl:
      'https://media.discordapp.net/attachments/1048586775553130587/1301506441797963786/wrtFileImageView.png?ex=67295714&is=67280594&hm=eb3d93da0ccc5f5850d480a4b7391248c9ffb3d24ccf3ed11aae756b026a0e15&=&format=webp&quality=lossless&width=656&height=437',
    isSelected: false,
    category: '스포츠>축구',
    keyword: '#월드컵',
    title: '2024 월드컵 예선전, 결과는?',
    description:
      '2024 월드컵 예선전에서 각국 팀들이 치열한 경쟁을 펼쳤습니다. 다음 단계로 진출할 팀들이 결정되었습니다...',
    date: '2024-10-06',
  },
  {
    id: 7,
    imageUrl: '',
    isSelected: true,
    category: '과학>우주',
    keyword: '#우주탐사',
    title: '화성 탐사 계획, 차질 없이 진행 중',
    description:
      '화성 탐사 계획이 순조롭게 진행되고 있으며, 과학자들은 새로운 데이터와 발견에 대해 큰 기대를 하고 있습니다...',
    date: '2024-10-07',
  },
  {
    id: 8,
    imageUrl: '',
    isSelected: false,
    category: '경제>부동산',
    keyword: '#주택시장',
    title: '서울 주택 시장, 가격 안정화 되나?',
    description:
      '최근 서울 주택 시장의 가격이 안정화되고 있다는 분석이 나오고 있습니다. 전문가들은 이 추세가 얼마나 지속될지 주목하고 있습니다...',
    date: '2024-10-08',
  },
  {
    id: 18,
    imageUrl: '',
    isSelected: false,
    category: '경제>부동산',
    keyword: '#주택시장',
    title: '서울 주택 시장, 가격 안정화 되나?',
    description:
      '최근 서울 주택 시장의 가격이 안정화되고 있다는 분석이 나오고 있습니다. 전문가들은 이 추세가 얼마나 지속될지 주목하고 있습니다...',
    date: '2024-10-08',
  },
];

const Profile = () => {
  const navigate = useNavigate();
  const handleBookmark = () => {
    console.log('북마크 기능 구현 필요');
  };

  const handleCardClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <S.Container>
      <S.Title>마이페이지</S.Title>
      <S.Content>
        <S.LeftContent>
          <ProfileCard
            image="https://github.com/user-attachments/assets/73482885-d02e-4ed4-a371-d78a527b6355"
            onClickEditProfile={() => {
              console.log('구현해야함');
            }}
            onClickEditKeyWord={() => {
              console.log('구현해야함');
            }}
            keywords={['장애인 권리', '대기업 동향', '세계 경제 전망', '키워드', ' 키워드']}
            coin={157}
          />
          <Calendar />
        </S.LeftContent>
        <S.RightContent>
          <S.RightHead>
            <AnalysisCard nickname="김뉴스" />
            <Quiz />
          </S.RightHead>
          <S.ScrapContent>
            <S.ScrapHead>
              <S.Text>김뉴스님이 스크랩한 뉴스</S.Text>
              <SearchBar
                placeholder="내가 스크랩한 뉴스"
                onClick={() => {
                  console.log('검색 구현해야함');
                }}
              />
            </S.ScrapHead>
            <S.CardList>
              {MOCK_CARDS.map((card) => (
                <Card
                  key={card.id}
                  imageUrl={card.imageUrl}
                  isSelected={card.isSelected}
                  category={card.category}
                  keyword={card.keyword}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                  onClickBookmark={handleBookmark}
                  onClickCard={() => handleCardClick(card.id)}
                />
              ))}
            </S.CardList>
            <PageNation totalPages={30} />
          </S.ScrapContent>
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
};

export default Profile;
