import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';




export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (thunkAPI) => {
        const res = await fetch('https://reqres.in/api/users?page=2').then(
            (res1) => res1.json()
        )
        return res.data



    })



export const userSlice = createSlice({
    name: "users",
    initialState: [],

    reducers: {

    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            console.log("inthunk")

            //state.loading = true
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            console.log("inthunk", payload)

            // state.loading = false
            return [...payload]
        },
        [getUsers.rejected]: (state) => {
            //state.loading = false
        },
    },



});
//export const { getUsers } = userSlice.actions
export default userSlice.reducer