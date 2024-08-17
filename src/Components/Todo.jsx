import React, { useRef, useState } from 'react'
import TodoArray from './TodoArray';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';

const Todo = () => {
    
    const todoInitial= useRef()
    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch();

  return (
    <>
    <div className='bg-zinc-700 flex justify-center text-white text-4xl p-10' >Manage Your to do</div>
        <div>
            <div className='bg-zinc-700 flex justify-center text-black text-4xl p-10' >
                
                <input
                    type="text"

                    name=""
                   
                    aria-describedby="helpId"
                    placeholder="Enter your task"
                    ref={todoInitial}
                />
                <button
                className='bg-red-200'
                onClick={()=>{
                    if(todoInitial.current.value){
                    dispatch(addTodo({title:todoInitial.current.value}))
                    todoInitial.current.value=""}
                   else alert("Please Enter task")
                }}  >Add</button>
            </div>
            
            {todos?.map((item)=>{
            return   <div  key={item.id} >
                     
                    <TodoArray item={item}  />
                </div>
            })}

        </div>
  </>
  )
}

export default Todo