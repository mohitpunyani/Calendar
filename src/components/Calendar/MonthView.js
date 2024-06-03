import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
const MonthView = ({ currentMonth }) => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start, end });

    return (
        <div className='m-3'>
            <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
            <div className="grid grid-cols-7 gap-x-[2px] gap-y-4">
                {days.map(day => (
                    <div className='flex items-center justify-center h-12 w-12 bg-gray-200 rounded shadow' key={day}>{format(day, 'd')}</div>
                ))}
            </div>
        </div>
    );
};

export default MonthView;
