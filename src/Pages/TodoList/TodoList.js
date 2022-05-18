import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

const TodoList = () => {
    const [task, setTask] = useState(null);
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label
                onClick={() => setTask({})}
                htmlFor="add-task-modal"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide border my-4 bg-purple-300">
                Add Task
            </label>
            {
                task && <AddTaskModal></AddTaskModal>
            }
        </div>
    );
};

export default TodoList;