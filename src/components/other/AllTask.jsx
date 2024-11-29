import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
   return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl mt-6 shadow-lg">
        <div className="bg-red-500 mb-4 py-3 px-6 flex justify-between rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-white w-1/5">Employee Name</h2>
            <h3 className="text-lg font-semibold text-white w-1/5">New Task</h3>
            <h5 className="text-lg font-semibold text-white w-1/5">Active Task</h5>
            <h5 className="text-lg font-semibold text-white w-1/5">Completed</h5>
            <h5 className="text-lg font-semibold text-white w-1/5">Failed</h5>
        </div>
        <div>
            {userData.map(function (elem, idx) {
                return (
                    <div
                        key={idx}
                        className="border-2 border-emerald-500 mb-4 py-3 px-6 flex justify-between rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                        <h2 className="text-lg font-medium text-white w-1/5">{elem.firstName}</h2>
                        <h3 className="text-lg font-medium text-blue-400 w-1/5">{elem.taskCounts.newTask}</h3>
                        <h5 className="text-lg font-medium text-yellow-400 w-1/5">{elem.taskCounts.active}</h5>
                        <h5 className="text-lg font-medium text-green-400 w-1/5">{elem.taskCounts.completed}</h5>
                        <h5 className="text-lg font-medium text-red-600 w-1/5">{elem.taskCounts.failed}</h5>
                    </div>
                );
            })}
        </div>
    </div>
);

}

export default AllTask