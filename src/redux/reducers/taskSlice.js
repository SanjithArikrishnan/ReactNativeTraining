import { createSlice } from '@reduxjs/toolkit';


export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],

    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        removeTask: (state, action) => {
            console.log(action.payload)
            return action.payload
        }
        
    }



});
export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer