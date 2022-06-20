import loginSlice from "./slices/loginSlice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import spinnerSlice from "./slices/loadingSlice";
import listSlice from "./slices/listSlice";
import tasksSlice from "./slices/tasksSlice";
import taskItemSlice from "./slices/taskItemSlice";

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        user: userSlice.reducer,
        spinner: spinnerSlice.reducer,
        list: listSlice.reducer,
        tasks: tasksSlice.reducer,
        // taskItems: taskItemSlice.reducer
    }
})

export default store