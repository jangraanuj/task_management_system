import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    // <div className='flex items-end justify-between'>
    //     <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
    //     <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    // </div>
    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold text-white">
        Hello <br />
        <span className="text-3xl font-extrabold text-yellow-300">username 👋</span>
    </h1>
    <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-semibold text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:bg-red-700"
    >
        Log Out
    </button>
</div>

  )
}

export default Header