import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div>
      <Btn onClick={() => setShowCalendar(!showCalendar)}>
        {selectedDate ? selectedDate.toLocaleDateString() : '날짜 선택'}
      </Btn>
      {showCalendar && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy년 MM월 dd일"
          calendarClassName="my-calendar"
          locale="ko"
        />
      )}
    </div>
  );
};

export default MyDatePicker;

const Btn = styled.button`
  width: auto;
  height: 35px;
  background-color: ${theme.colors.fourth};
  color: ${theme.colors.gr_2};
  border-radius: 10px;
  border: none;
  padding: 8px 15px 10px 15px;
`;
