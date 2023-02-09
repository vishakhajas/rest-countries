import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { searching,filtering } from "../utils";
let all_countries
const initialState = {
  countries: null,
  loading: false,
  error: false,
};
// {
//   return axios.get("https://restcountrie.com/v2/all").then((res) => (
//       res.data
//   )).catch((error) => {
//       return new Error(error.message)
//   }     
//   )
// }
export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    let res = await axios.get("https://restcountries.com/v2/all");
    return res.data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    search:(state,action)=>{
      let result = searching(all_countries,"name",action.payload.keyword)
      state.countries=result;
    },
    filterCountries : (state, action) => {
      let result = filtering(all_countries, action.payload.keyword);
      state.countries = result;
  },
  },
  
  extraReducers : {
    [fetchAllCountries.pending] : (state, action) => {
        state.loading = true;
    },
    [fetchAllCountries.fulfilled] : (state, action) => {
        state.countries = action.payload;
        state.loading = false;
        all_countries=action.payload
    },
    [fetchAllCountries.rejected] : (state, action) => {
        state.loading = false;
        // console.log(action.error.message)
        state.error = action.error.message;
    },
  }
});
export const {search, filterCountries} = countrySlice.actions
export default countrySlice.reducer;
