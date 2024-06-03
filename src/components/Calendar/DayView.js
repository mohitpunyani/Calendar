import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
// import AppointmentForm from '../components/Appointment/AppointmentForm';
// import AppointmentList from '../components/Appointment/AppointmentList';

import AppointmentForm from '../Appointment/AppointmentForm';
import AppointmentList from '../Appointment/AppointmentList';
import TaskForm from '../Task/TaskForm';
import TaskList from '../Task/TaskList';

const DayView = ({ currentDay }) => {
    const [appointmentsForDay, setAppointmentsForDay] = useState([]);
    const [tasksForDay, setTasksForDay] = useState([]);
    const addAppointmentForDay = (appointment) => {
        setAppointmentsForDay([...appointmentsForDay, appointment]);
    };
    const addTaskForDay = (task) => {
        setTasksForDay([...tasksForDay, task]);
    };
    return (
        <div className='m-3'>
            <h2>{format(currentDay, 'EEEE, MMMM d, yyyy')}</h2>
            <div>
                {/* Display appointments and tasks for the day */}
                <AppointmentForm addAppointment={addAppointmentForDay} />
                {/* Render AppointmentList */}
                <AppointmentList appointments={appointmentsForDay} />
                <br />
                <TaskForm addTask={addTaskForDay} />
                {/* Render TaskList */}
                <TaskList tasks={tasksForDay} />
            </div>
        </div>
    );
};

export default DayView;
