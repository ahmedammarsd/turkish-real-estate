import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";
import { useTranslation } from "react-i18next";


const initialState = {
    loading: false,
    services: [],
    status:"",
    error: null
}

// READ SERVICES 
export const getServices = createAsyncThunk("getServices" , (arg, thunkAPI) => {
    return axios.get(`${BaseUrl}services_sections` , {
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then( (res) => {
        //console.log("from redux",res.data , res.status)
         return res.data
     })
     .catch( (error) => {
         if (error.status === 500){
             return thunkAPI.rejectWithValue(error.error)
         }
         else {
             const msgErr = ""
             return  thunkAPI.rejectWithValue(msgErr)
         }
     })
});

const services = createSlice({
    name: "services",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getServices.pending , (state) => {
            state.loading = true;
        });
        builder.addCase(getServices.fulfilled , (state, action) => {
            state.loading = false;
            state.status = "success";
            state.services.push(action.payload);
        });
        builder.addCase(getServices.rejected , (state , action) => {
            state.loading = false;
            state.status = "failed";
            state.error = action.payload
        })
    }
})


export default services.reducer