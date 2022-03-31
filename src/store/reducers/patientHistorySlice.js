import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const historySlice = createSlice({
    name: 'patient_history',
    initialState,
    reducers: {
        addHistory: (state) => {

        },
        updateHistory: (state) => {

        },
        findHistory: (state) => {

        },
        removeHistory: (state) => {

        }
    }
})

export const { addHistory, updateHistory, findHistory, removeHistory } = historySlice.actions

export default historySlice.reducer