import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const medicineSlice = createSlice({
    name: 'medicines',
    initialState,
    reducers: {
        addMedicine: (state) => {

        },
        updateMedicine: (state) => {

        },
        readMedicine: (state) => {

        },
        findOneMedicine: (state) => {

        },
        removeMedicine: (state) => {

        }
    }
})

export const { addMedicine, updateMedicine, readMedicine, findOneMedicine, removeMedicine } = medicineSlice.actions

export default medicineSlice.reducer