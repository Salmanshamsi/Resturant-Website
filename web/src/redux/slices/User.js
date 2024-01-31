import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userId: "", email: "", isPopup: false, isLoad: false
}
const UserCounterSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        saveuserId: (state, { payload }) => {
            state.userId = payload
        },
        saveEmail: (state, { payload }) => {
            state.email = payload
        },
        logout: (state) => {
            state.userId = ''
        },
        setIsPopup: (state, { payload }) => {
            state.isPopup = payload
        },
        setIsLoad: (state) => {
            state.isLoad = !state.isLoad
        },
    }
})
export const {
    saveuserId,
    logout,
    saveEmail,
    setIsPopup,
    setIsLoad
} = UserCounterSlice.actions
export default UserCounterSlice.reducer