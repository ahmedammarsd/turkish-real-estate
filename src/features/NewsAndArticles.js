import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";

const initialState = {
    data:[],
    loading:false,
    error: null
}

// READ ACTION
export const getNewsAndArticles = createAsyncThunk("getNewsAndArticles" , (_ , {rejectWithValue}) => {
   return axios.get(`${BaseUrl}articles`)
    .then( (res) => {
       //console.log("from redux",res.data , res.status)
        return res.data
    })
    .catch( (error) => {
        if (error.status === 500){
            return rejectWithValue(error.error)
        }
        else {
            const msgErr = "Sorry , Error in get Data"
            return  rejectWithValue(msgErr)
        }
    })
})
// END READ ACTION

const newsAndArticles = createSlice({
    name: "newsAndArticles",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getNewsAndArticles.pending , (state) => {
            state.loading = true;
        });
        builder.addCase(getNewsAndArticles.fulfilled , (state ,action) => {
            state.loading = false;
            state.data.push(action.payload);
        });
        builder.addCase(getNewsAndArticles.rejected , (state) => {
            state.loading = false;
            state.error = action.payload
        })
    }
});

export default newsAndArticles.reducer;