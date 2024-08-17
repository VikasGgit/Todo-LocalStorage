import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus, removeTodo, updateTodo } from "../redux/TodoSlice";

const TodoArray = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState();
  const dispatch = useDispatch();
  return (
    <div className="flex gap-x-3 gap-y-4  bg-blue-100 p-5 justify-center">
      
      {isEditing ? (
        <div className="flex gap-x-10 " >
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <button 
          className="bg-violet-300 p-1 rounded-md"
            onClick={() => {
              dispatch(updateTodo({ id: item.id, title: newTitle }));
              setIsEditing(false);
              setNewTitle("");
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex gap-x-10" >
          <p className={` ${item.status ? "line-through" : "" }`} >{item.title}</p>
          <button className="bg-yellow-200 p-1 rounded-md"
            onClick={() => {
              setNewTitle(item.title);
              setIsEditing(true);
            }}
          >
            Update
          </button>
        </div>
      )}
      <button className="bg-red-500 p-1 rounded-md "
        onClick={() => {
          dispatch(removeTodo({ id: item.id }));
        }}
      >
        delete
      </button>
      {item.status ? (
        <button className="bg-green-600 p-1 rounded-md"
          onClick={() => {
            dispatch(changeStatus({ id: item.id }));
          }}
        >
          Completed
        </button>
      ) : (
        <button className="bg-yellow-600 p-1 rounded-md"
          onClick={() => {
            dispatch(changeStatus({ id: item.id }));
          }}
        >
          In Progress
        </button>
      )}
    </div>
  );
};

export default TodoArray;
