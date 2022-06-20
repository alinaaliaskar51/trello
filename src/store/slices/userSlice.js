import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'alina@gmail.com',
    password: '1234asdf',
    validEmail : false,
    validPassword : false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        email(state, action) {
            
            if(state.email === action.payload){
                state.validEmail = true
            }

        },
        password(state, action) {
            if(state.password === action.payload){
                state.validPassword = true
            }

        }
    }
})

export const userActions = userSlice.actions
export default userSlice