import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        isLoading: true,
        userEmail: '',
    },
    reducers: {
        currentUser: (state, action) => {
            state.user = action.payload;
        },
        startLoading: (state, action) => {
            state.isLoading = true;
        },
        stopLoading: (state, action) => {
            state.isLoading = false;
        },
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        }
    }
})

export const { currentUser, startLoading, stopLoading, setUserEmail } = userSlice.actions;
export default userSlice.reducer