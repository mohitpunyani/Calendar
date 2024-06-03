import React, { createContext, useState, useContext } from 'react';
import { startOfToday } from 'date-fns';

const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(startOfToday());
  const [appointments, setAppointments] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate, appointments, addAppointment, tasks, addTask }}>
      {children}
    </CalendarContext.Provider>
  );
};
