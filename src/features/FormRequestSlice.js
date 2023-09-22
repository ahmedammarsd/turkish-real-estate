import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";
import { useTranslation } from "react-i18next";


const initialState = {
    loading: false,
    statusReq:"",
    status:"",
    error: null
}


// CREATE OR ADD FORM
 export const addRequest = createAsyncThunk("addRequest" , (data , thunkAPI) => {
    return axios.post(`${BaseUrl}forms` , data , {
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then( (res) => res.status)
    .catch( (err) => {
        if (err.status === 500){
            return thunkAPI.rejectWithValue(err.error)
        }
        else {
            const msgErr = ""
            return  thunkAPI.rejectWithValue(msgErr)
        }
    })
 })
// END CREATE OR ADD FORM

const request = createSlice({
    name: "request",
    initialState,
    reducers: {
        tryAgain: (state) => {
            state.loading = false,
            state.status = "",
            state.statusReq = "",
            state.error = null
        }
    },
    extraReducers:(builder) => {
        builder.addCase(addRequest.pending , (state) => {
            state.loading = true
        });
        builder.addCase(addRequest.fulfilled , (state , action) => {
            state.loading = false ;
            state.statusReq = action.payload ;
            state.status = "success"
        });
        builder.addCase(addRequest.rejected , (state , action) => {
            state.loading = false ;
            state.status = "failed" ;
            state.error = action.payload
        })
    }
})

export const { tryAgain } = request.actions
export default request.reducer
