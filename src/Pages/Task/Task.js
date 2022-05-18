import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Task = ({ task, refetch }) => {
    const [done, setDone] = useState(false);
    const { _id, taskName, taskDescription, status } = task;

    const handleDone = () => {
        setDone(true);
        fetch(`https://rocky-tor-17555.herokuapp.com/task/${_id}`, {
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
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rocky-tor-17555.herokuapp.com/task/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Task has been deleted.',
                    'success'
                )
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
                    <button onClick={handleDone} className="btn btn-sm btn-outline btn-primary" disabled={done || status}>Complete</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-outline btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;