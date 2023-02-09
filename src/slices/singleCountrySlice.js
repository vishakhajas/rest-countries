import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import countrySlice from './countrySlice';


const initialState = {
    country : null,
    loading : false,
    error : false,
}

export const fetchSingleCountry = createAsyncThunk("singlecountry/fetchSingleCountry", 
async (name)=> {
    let res = await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`);
    return res.data
})


const singleCountrySlice = createSlice({
    name : "singleCountry",
    initialState,
    extraReducers : {
        [fetchSingleCountry.pending] : (state, action) => {
            state.loading = true;
        },
        [fetchSingleCountry.fulfilled] : (state, action) => {
            state.country = action.payload;
            state.loading = false;
        },
        [fetchSingleCountry.rejected] : (state, action) => {
            state.loading = false;
            // console.log(action.error.message)
            state.error = action.error.message;
        },
    }
})

export default singleCountrySlice.reducer;