import React, { useState } from 'react';
import { useCalendar } from '../../contexts/CalendarContext';

const AppointmentForm = () => {
  const { addAppointment } = useCalendar();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ title, date });
    setTitle('');
    setDate('');
  };

  return (
    <form className='flex flex-row gap-4 m-2' onSubmit={handleSubmit}>
      <input className="w-[150px] p-2 border border-gray-300 rounded" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input className="w-[150px] p-2 border border-gray-300 rounded" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="w-[150px] p-2 border border-gray-400 rounded bg-zinc-400" type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
