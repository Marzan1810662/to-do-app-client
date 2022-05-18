import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTaskModal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://rocky-tor-17555.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    console.log(data);
                    toast.success('Task added sucessfully')
                }
            })
    };
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="add-task-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box">
                    <h2 className='mb-3'>Add Task</h2>
                    <label htmlFor="add-task-modal" className="btn btn-sm btn-square bg-purple-300 absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Task Name</span>
                            </label>
                            <input
                                className="input input-bordered w-full max-w-lg mb-3"
                                {...register("taskName", {
                                    required: {
                                        value: true,
                                        message: 'Task name is required'
                                    },
                                })} />
                            <label>
                                {errors.taskName?.type === 'required' && <span className="label-text-alt text-red-500">
                                    {errors.taskName.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-lg'>
                            <label className="label">
                                <span className="label-text">Task Description</span>
                            </label>
                            <textarea
                                className="input input-bordered w-full max-w-lg mb-3 h-24"
                                {...register("taskDescription", {
                                    required: {
                                        value: true,
                                        message: 'Task Description is required'
                                    },
                                })} />
                            <label>
                                {errors.taskDescription?.type === 'required' && <span className="label-text-alt text-red-500">
                                    {errors.taskDescription.message}</span>}
                            </label>
                        </div>

                        <input type="submit" value="Submit" className="btn bg-purple-300 w-full max-w-lg my-2" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddTaskModal;