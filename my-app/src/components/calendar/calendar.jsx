import React from 'react';
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const styles = {
  marginTop: '50px',
  marginLeft: '230px',
  maxWidth: '900px',
};

const CalendarPage = () => (
  <div style={styles} className="Calendar1">
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, timeGridPlugin]}
      displayEventTime="true"
      header={{ right: 'dayGridMonth,timeGridWeek', left: 'today prev,next', center: 'title' }}
      events={[{
        title: 'Republican Wushu Tournament',
        start: '2021-05-03T14:30:00',
        allDay: false,
        color: '#2D6041',
      },
      {
        title: 'International Karate Workshop', start: '2021-05-06T17:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'International Jiu Jitsu Competitions in Hungary', start: '2021-05-10T13:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Japan National Aikido Team Master Class', start: '2021-05-13T09:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Demonstration performance of the Azerbaijani national team in the kata section', start: '2021-05-15T10:40:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Team karate training', start: '2021-05-18T19:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Team aikido training', start: '2021-05-18T17:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Republican wushu competitions', start: '2021-05-19T10:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Club Martial Arts Tournament', start: '2021-05-27T10:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Karate Tournament', start: '2021-06-09T10:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'European Taekwondo Championships', start: '2021-06-15T12:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'World aikido Championships', start: '2021-06-25T12:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'Защита курсовой', start: '2021-05-17T12:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'taekwondo judging workshop', start: '2021-05-07T18:50:00', allDay: false, color: '#2D6041',
      }]}
    />
  </div>
);

export default CalendarPage;
