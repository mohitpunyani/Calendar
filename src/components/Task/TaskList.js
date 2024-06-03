import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div className='m-3'>
            <h3>Tasks</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.title} - {task.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
