import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";
import { useTranslation } from "react-i18next";

const initialState = {
    loading: false,
    realEstates: [],
    status:"",
    error: null
}

// READ REAL ESTATE
export const getRealEstates = createAsyncThunk("getRealEstates" , async({}, thunkAPI) => {
    const { t } = useTranslation();
    // return axios.get(`${BaseUrl}real_estate`)
    // .then( (res) => res.data)
    // .catch( (error) => {
    //     if (error.status === 500){
    //         return thunkAPI.rejectWithValue(error.error)
    //     }
    //     else {
    //         const msgErr = t("errorInGet")
    //         return  thunkAPI.rejectWithValue(error)
    //     }
    // })
    try{
        const res = await axios.get(`${BaseUrl}real_estate`);
        return res.data;
    }
    catch (errr){
        return errr
    }
})
// END READ REAL ESTATE

const realEstates = createSlice({
    name: "realEstates",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getRealEstates.pending , (state) => {
            state.loading = true;
        });
        builder.addCase(getRealEstates.fulfilled , (state , action) => {
            state.loading = false;
            state.status = "success";
            state.realEstates.push(action.payload);
        });
        builder.addCase(getRealEstates.rejected , (state , action) => {
            state.loading = false ;
            state.status = "failed" ;
            state.error = action.payload;
            //console.log(action.meta.condition)
        })
    }
});

export default realEstates.reducer ;