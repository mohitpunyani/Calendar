import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate input fields here if needed
        addTask({ title, date }); // Add task to the list
        setTitle(''); // Reset input field
    };

    return (
        <form className='flex gap-4 m-2' onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
                className="w-[150px] p-2 border border-gray-300 rounded"
            />
            <input className="w-[150px] p-2 border border-gray-300 rounded" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button className="w-[150px] p-2 border border-gray-400 rounded bg-zinc-400" type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
