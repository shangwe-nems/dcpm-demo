import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: '',
        first_name: '',
        last_name: '',
        birthday: '',
        phone: '',
        sex: '',
        zone: '',
        distance: '',
        mother: '',
        main_problem: '',
        languages: ['arabe', 'français', 'wolof', 'pulaar', 'soninké', 'autre']
    }
]

export const patientSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state) => {

        },
        updatePatient: (state) => {

        },
        readPatients: (state) => {

        },
        findOnePatient: (state) => {

        },
        removePatient: (state) => {

        }
    }
})

export const { addPatient, updatePatient, readPatients, findOnePatient, removePatient } = patientSlice.actions

export default patientSlice.reducer