import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { Colors, FontStyles } from '../../../styles';
import CalendarCoin from '../../../assets/icons/CalendarCoinIcon.svg';
import CalendarNoCoin from '../../../assets/icons/CalendarNoCoinIcon.svg';

export const StyledCalendarWrapper = styled.div`
  width: 21.6875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid ${Colors.Grayscale10};
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
  }

  /* 이전/다음 연도 버튼 숨기기 */
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  /* 요일 헤더 스타일 */
  .react-calendar__month-view__weekdays__weekday {
    ${FontStyles.XS_Medium}
    color: ${Colors.Main70};
  }

  /* 요일 헤더 밑줄 제거 */
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  /* 날짜 스타일 */
  .react-calendar__tile {
    abbr {
      position: relative;
      color: ${Colors.Grayscale60};
      ${FontStyles.XS_Medium}
    }
    /* 클릭 비활성화 */
    pointer-events: none;
  }

  /* 날짜 간격 */
  .react-calendar__month-view__days {
    row-gap: 0.5rem;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${Colors.Main50};
    }
  }

  /* 출석 여부에 따른 스타일 */
  .attended,
  .notAttended,
  .afterDay {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${FontStyles.XS_Medium};
  }

  /* 출석 했을 때 */
  .attended {
    background-image: url(${CalendarCoin});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* 출석 안했을 때 */
  .notAttended {
    background-image: url(${CalendarNoCoin});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* 오늘 이후 날짜 스타일 */
  .afterDay {
    abbr {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${Colors.Grayscale5};
    }
  }
`;

export const Title = styled.span`
  ${FontStyles.MD1_Bold}
  color: ${Colors.Grayscale80};
`;

export const Description = styled.p`
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale40};
`;

export const DateText = styled.p`
  ${FontStyles.XS_Medium}
  color:${Colors.Grayscale90};
`;
