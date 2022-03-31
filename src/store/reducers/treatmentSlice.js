import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const treatmentSlice = createSlice({
    name: 'treatment',
    initialState,
    reducers: {
        addTreatment: (state) => {

        },
        updateTreatment: (state) => {

        },
        readTreatments: (state) => {

        },
        findOneTreatment: (state) => {

        },
        removeTreatment: (state) => {

        }
    }
})

export const { addTreatment, updateTreatment, readTreatments, findOneTreatment, removeTreatment } = treatmentSlice.actions

export default treatmentSlice.reducer