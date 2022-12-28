import { configureStore } from "@reduxjs/toolkit";
import flightDataRedcuer from "../features/flightData";

export const store = configureStore({
  reducer: {
    allData: flightDataRedcuer,
  },
});
