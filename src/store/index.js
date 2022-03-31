import { configureStore } from "@reduxjs/toolkit";
import medicineSlice from "./reducers/medicineSlice";
import patientHistorySlice from "./reducers/patientHistorySlice";
import patientInfoSlice from "./reducers/patientInfoSlice";
import treatmentSlice from "./reducers/treatmentSlice";
import userReducer from "./reducers/usersSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
        patientInfos: patientInfoSlice,
        patientHistories: patientHistorySlice,
        treatments: treatmentSlice,
        medicines: medicineSlice
    }
})