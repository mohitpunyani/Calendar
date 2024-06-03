import React, { useState } from 'react';
import MonthView from '../components/Calendar/MonthView';
import WeekView from '../components/Calendar/WeekView';
// import WeekView from '../components/Calendar/WeekView';
import DayView from '../components/Calendar/DayView';
// import DayView from '../components/Calendar/DayView';
import { useCalendar } from '../contexts/CalendarContext';

const CalendarPage = () => {
    const { currentDate } = useCalendar();
    const [view, setView] = useState('month'); // or 'week', 'day'

    const renderView = () => {
        switch (view) {
            case 'month':
                return <MonthView currentMonth={currentDate} />;
            case 'week':
                return <WeekView currentWeek={currentDate} />;
            case 'day':
                return <DayView currentDay={currentDate} />;
            default:
                return <MonthView currentMonth={currentDate} />;
        }
    };

    return (
        <div>
            <div className='m-3 flex gap-4'>
                <button className="w-[150px] p-2 border border-gray-400 rounded bg-zinc-400" onClick={() => setView('month')}>Month</button>
                <button className="w-[150px] p-2 border border-gray-400 rounded bg-zinc-400" onClick={() => setView('week')}>Week</button>
                <button className="w-[150px] p-2 border border-gray-400 rounded bg-zinc-400" onClick={() => setView('day')}>Day</button>
            </div>
            {renderView()}
        </div>
    );
};

export default CalendarPage;
