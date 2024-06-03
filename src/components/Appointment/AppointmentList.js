import React from 'react';
import { useCalendar } from '../../contexts/CalendarContext';

const AppointmentList = () => {
  const { appointments } = useCalendar();

  return (
    <div className='m-3'>
      <h3>All Appointments</h3>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{appointment.title} - {appointment.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
