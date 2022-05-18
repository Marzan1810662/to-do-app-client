import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Task from '../Task/Task';
import AddTaskModal from './AddTaskModal';

const TodoList = () => {
    const [task, setTask] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const { data: tasks, isLoading, refetch } = useQuery('tasks', () =>
        fetch(`https://rocky-tor-17555.herokuapp.com/task/${user.email}`,{
            method: 'GET',
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <div className='my-3'>
                <h1 className='text-purple-700 font-bold text-3xl'>Your Task List</h1>
            </div>
            <div className='text-right md:mr-4 lg:mr-28'>
                <label
                    onClick={() => setTask({})}
                    htmlFor="add-task-modal"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide border my-4 bg-purple-300 ">
                    Add Task
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mx-2 md:mx-4 lg:mx-28'>
                {
                    tasks?.map(task => <Task key={task._id} task={task} refetch={refetch}></Task>)
                }
            </div>

            {
                task && <AddTaskModal setTask={setTask} refetch={refetch}></AddTaskModal>
            }
        </div>
    );
};

export default TodoList;