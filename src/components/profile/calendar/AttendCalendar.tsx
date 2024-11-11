import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as S from './AttendCalendar.Style';

const AttendanceData = [true, false, true, false, true, false, false, true, false, true, false];

const AttendCalendar = () => {
  const today = new Date();
  const month = today.getMonth();

  const getTileClassName = ({ date }: { date: Date }) => {
    const day = date.getDate();

    if (date > today) return 'afterDay';

    const isAttended = AttendanceData[day - 1];
    return isAttended ? 'attended' : 'notAttended';
  };

  return (
    <S.StyledCalendarWrapper>
      <div>
        <S.Title>{month + 1}월 출석 달력</S.Title>
        <S.Description>이번 달 출석 현황을 달력으로 확인해요.</S.Description>
      </div>
      <Calendar
        prevLabel={null}
        nextLabel={null}
        showNavigation={false}
        locale="ko-KR"
        formatDay={(_locale, date) => date.getDate().toString()}
        showNeighboringMonth={false}
        tileClassName={getTileClassName}
      />
    </S.StyledCalendarWrapper>
  );
};

export default AttendCalendar;
