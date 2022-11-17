import { createSlice } from '@reduxjs/toolkit';


export const imgSlice = createSlice({
    name: "images",
    initialState: [],

    reducers: {
        addImages: (state, action) => {
            return action.payload
        }
        
    }



});
export const { addImages } = imgSlice.actions
export default imgSlice.reducer