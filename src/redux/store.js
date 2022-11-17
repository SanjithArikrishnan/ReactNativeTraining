import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskSlice";
import userReducer from "./reducers/userSlice";
import imageReducer from "./reducers/imgSlice";

import logger from 'redux-logger';


export default configureStore({
    reducer: {
        tasks: taskReducer,
        users: userReducer,
        images: imageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})
