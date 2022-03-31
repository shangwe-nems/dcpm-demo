import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [
        {
            _id: '60d4775de48d590d4859cbe9',
            email: 'admin@dcpm.com',
            password: '123456',
            first_name: 'Admin',
            last_name: 'DCPM',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
            role: 'admin',
            gender: 'female',
        },
        {
            _id: '60d4777ce48d590d4859cbea',
            email: 'nurse@dcpm.com',
            password: '12345ED!',
            first_name: 'Nurse',
            last_name: 'DCPM',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
            role: 'nurse',
            gender: 'male',
        },
        {
            _id: '60d47793e48d590d4859cbeb',
            email: 'triage@dcpm.com',
            password: '123456aas',
            first_name: 'Triage',
            last_name: 'DCPM',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
            role: 'triage',
            gender: 'male',
        },
        {
            _id: '60d47793e48d590d4859cbec',
            email: 'labo@dcpm.com',
            password: '123456aas',
            first_name: 'Lab',
            last_name: 'DCPM',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
            role: 'lab_specialist',
            gender: 'female',
        }
    ],
    currentLoggedIn : {}
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action) => {

        },
        loginUser: (state, { payload }) => {
            let now = Date.now();
            const expiresAt = now + (30 * 60000);
            state.currentLoggedIn = {...payload, createdAt: now, expiresAt};
        },
        logoutUser: (state) => {
            state.currentLoggedIn = {};
        },
        updateUser: (state, action) => {

        },
        readUser: (state, action) => {

        },
        removeUser: (state, action) => {

        }
    }
})

export const { createUser, loginUser, logoutUser, authUser, updateUser, readUser, removeUser } = userSlice.actions

export default userSlice.reducer