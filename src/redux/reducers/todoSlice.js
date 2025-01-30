import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        data:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todoData ={
                id:state.data.length,
                title:action.payload.title,
                desc: action.payload.desc
            };

            state.data=[todoData,...state?.data]
        },
        deleteTodo:(state,action)=>{
            state.data=state.data.filter((i)=>i.id !== action.payload.id)
        },
        editTodo:(state,action)=>{
            const ind=state.data.findIndex(i=>i.id==action.payload.id)
            state.data[ind].desc=action.payload.desc
            state.data[ind].title=action.payload.title
        }
    }
})

export const {addTodo,deleteTodo,editTodo}=todoSlice.actions;

export default todoSlice.reducer