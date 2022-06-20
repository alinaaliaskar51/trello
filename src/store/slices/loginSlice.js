import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showLogin: false,
    
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginPage(state) {
            state.showLogin = !state.showLogin
        },

    }

})

export const loginActions = loginSlice.actions
export default loginSlice
