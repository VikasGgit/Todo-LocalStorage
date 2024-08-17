import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState={todos:[
    {id:1, title:"Hello", status:false},
    {id:2, title:"Ram", status:false}
],
}

const loadState = () => {
    try {
      const serializedState = localStorage.getItem("todos");
      return serializedState
        ? { todos: JSON.parse(serializedState) }
        : initialState;
    } catch (e) {
      console.error("Error loading from local storage", e);
      return initialState;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state.todos);
      localStorage.setItem("todos", serializedState);
    } catch (e) {
      console.error("Error saving state", e);
    }
  };

export const todoSlice= createSlice({
    name :'todo',
    initialState:loadState(),
    reducers:{
        addTodo:(state, action)=>{
            console.log(localStorage);
            const todo={id:nanoid(), title:action.payload.title, status:false}
            state.todos.push(todo);
            saveState(state)
        },

        removeTodo:(state, action)=>{

             state.todos=   state.todos.filter((todo)=> todo.id!== action.payload.id )
                saveState(state)
        },
        changeStatus:(state, action)=>{
           const todo= state.todos.find((todo)=>todo.id===action.payload.id)
            if(todo){
            todo.status = !todo.status
            }
            saveState(state)
        },
        updateTodo:(state, action)=>{
            const {id, title}=action.payload;
            const todo= state.todos.find((todo)=> todo.id===id)
            if(todo){
                todo.title=title;
            }
            saveState(state);
                },

    }
})

export const {addTodo, removeTodo, changeStatus, updateTodo}= todoSlice.actions;

export default todoSlice.reducer;