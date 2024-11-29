import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className="flex mt-10 justify-between gap-5 screen">
            
            <div className="rounded-xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg transform hover:scale-105 transition-all duration-300">
                <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.newTask}</h2>
                <h3 className="text-2xl mt-0.5 text-white font-medium">New Task</h3>
            </div>
            
            <div className="rounded-xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-green-500 to-teal-600 shadow-lg transform hover:scale-105 transition-all duration-300">
                <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.completed}</h2>
                <h3 className="text-2xl mt-0.5 text-white font-medium">Completed Task</h3>
            </div>
            
            <div className="rounded-xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg transform hover:scale-105 transition-all duration-300">
                <h2 className="text-4xl font-extrabold text-black">{data.taskCounts.active}</h2>
                <h3 className="text-2xl mt-0.5 text-black font-medium">Accepted Task</h3>
            </div>
            
            <div className="rounded-xl w-full sm:w-[45%] py-6 px-9 bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg transform hover:scale-105 transition-all duration-300">
                <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.failed}</h2>
                <h3 className="text-2xl mt-0.5 text-white font-medium">Failed Task</h3>
            </div>
        </div>
    );
    
}

export default TaskListNumbers