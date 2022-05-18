import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task = ({ task, refetch }) => {
    const [done, setDone] = useState(false);
    const { _id, taskName, taskDescription, status } = task;

    const handleDone = () => {
        setDone(true);
        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PUT',
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('task completed')
                }
            })
    }
    return (
        <div className="card lg:card-side bg-base-100 drop-shadow-xl bg-gray-50">
            <div className="card-body">
                <div className={`${done || status ? 'line-through' : ''}`}>
                    <h2 className="card-title">{taskName}</h2>
                    <p className='text-left'>{taskDescription}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleDone} className="btn btn-sm btn-outline btn-primary">Complete</button>
                    <button className="btn btn-sm btn-outline btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;