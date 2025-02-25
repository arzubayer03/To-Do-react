import React from 'react'
import icon from '../assets/todo-list.svg'

function Todo() {
    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 h-[550px] rounded-xl'>
            <div className='flex items-center mt-7 gap-2'>
                <img className='size-8' src={icon} alt="" />
                <h1 className='text-3xl font-semibold '>To-Do List</h1>
            </div>

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input className='bg-transparent border-0 outline-none flex-1 pl-6 h-14' type="text" placeholder='Add task' />
                <button>ADD</button>
            </div>
        </div>
    )
}

export default Todo
