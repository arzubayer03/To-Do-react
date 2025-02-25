import React from 'react'
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

function TodoItems({text, id, isComplete, deleteTodo, toggle}) {
    return (
        <div className="flex items-center my-3 gap-2">
            <div onClick={()=>{toggle(id)}}  className='flex flex-1 items-center cursor-pointer space-x-4'>
                {isComplete ? <FaRegSquareCheck className='size-6 text-green-500'/> : <FaRegSquare className='size-6 text-orange-500'/>}
                
                <p className={`decoration-green-400 ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>

            <FaTrashCan onClick={()=>{deleteTodo(id)}} className='w-4 cursor-pointer '/>

        </div>
    )
}

export default TodoItems
