import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div>
      <button onClick={() => setShowCalendar(!showCalendar)}>
        {selectedDate ? selectedDate.toLocaleDateString() : '날짜 선택'}
      </button>
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
