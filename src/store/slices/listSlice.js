import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isShown: false
}

const listSlice = createSlice({
    name:'list',
    initialState,
    reducers: {
        showAddInput (state) {
            state.isShown = !state.isShown
        }
    }

}) 

export const listActions = listSlice.actions
export default listSlice