import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import data from "../config/flightData.json";

const initialState = {
  apiFlightData: [],
};

export const flightData = createSlice({
  name: "flightData",
  initialState,
  reducers: {},
});

export default flightData.reducer;
