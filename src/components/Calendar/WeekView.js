import React from 'react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

const WeekView = ({ currentWeek }) => {
    const start = startOfWeek(currentWeek);
    const end = endOfWeek(currentWeek);
    const days = eachDayOfInterval({ start, end });

    return (
        <div className='m-3'>
            <h2 className='font-bold'>Week of {format(start, 'MMMM d')} - {format(end, 'MMMM d')}</h2>
            <div>
                {days.map(day => (
                    <div key={day}>{format(day, 'EEEE, MMM d')}</div>
                ))}
            </div>
        </div>
    );
};

export default WeekView;
