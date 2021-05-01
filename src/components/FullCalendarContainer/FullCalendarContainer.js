import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

const FullCalendarContainer = () => {
  const handleDateClick = (arg) => {
    console.log('click');
    alert(arg.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={[
        { title: 'event 1', date: '2019-04-01' },
        { title: 'event 2', date: '2019-04-02' },
      ]}
      dateClick={handleDateClick}
    />
  );
};

export default FullCalendarContainer;
