import {configureStore} from '@reduxjs/toolkit'
import countrySlice from '../slices/countrySlice';
import singleCountrySlice from '../slices/singleCountrySlice';

const store = configureStore({
    reducer : {
            countries : countrySlice,
            singleCountry : singleCountrySlice 
    }
})

export default store;


// npm i redux react-redux @reduxjs/toolkit