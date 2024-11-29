import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6 rounded-xl shadow-xl">
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className="flex flex-wrap w-full items-start justify-between"
            >
                <div className="w-full sm:w-1/2 space-y-5">
                    <div>
                        <h3 className="text-lg text-white font-semibold mb-1">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }}
                            className="w-full py-3 px-4 text-base rounded-lg bg-white/30 placeholder-white focus:ring-2 focus:ring-blue-400 border-none text-white outline-none"
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg text-white font-semibold mb-1">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value);
                            }}
                            className="w-full py-3 px-4 text-base rounded-lg bg-white/30 placeholder-white focus:ring-2 focus:ring-blue-400 border-none text-white outline-none"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg text-white font-semibold mb-1">Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value);
                            }}
                            className="w-full py-3 px-4 text-base rounded-lg bg-white/30 placeholder-white focus:ring-2 focus:ring-blue-400 border-none text-white outline-none"
                            type="text"
                            placeholder="Employee name"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg text-white font-semibold mb-1">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            className="w-full py-3 px-4 text-base rounded-lg bg-white/30 placeholder-white focus:ring-2 focus:ring-blue-400 border-none text-white outline-none"
                            type="text"
                            placeholder="Design, Dev, etc."
                        />
                    </div>
                </div>
    
                <div className="w-full sm:w-2/5 flex flex-col items-start space-y-4">
                    <h3 className="text-lg text-white font-semibold mb-1">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }}
                        className="w-full h-44 py-3 px-4 text-base rounded-lg bg-white/30 placeholder-white focus:ring-2 focus:ring-blue-400 border-none text-white outline-none"
                        placeholder="Add a task description"
                    />
                    <button className="bg-emerald-500 py-3 px-6 rounded-lg text-white font-semibold text-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 transition-all duration-200 mt-4 w-full">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
    
}

export default CreateTask