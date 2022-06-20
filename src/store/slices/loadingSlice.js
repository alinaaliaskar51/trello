import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    
}

const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = !state.isLoading
        },
        endLoading (state) {
            state.isLoading = false
        }
    }

})

export const spinnerActions = spinnerSlice.actions
export default spinnerSlice