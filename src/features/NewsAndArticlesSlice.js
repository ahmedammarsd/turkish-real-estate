import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";

const initialState = {
    dataNewsAndArticles:[],
    loading:false,
    status: "",
    error: null,
    categories:[],
    loadingCategories:false,
    statusCategories:"",
    errorCategories: null,
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

// READ CATEGORIES
export const getCategories = createAsyncThunk("getCategories" , (_,{rejectWithValue}) => {
    return axios.get(`${BaseUrl}categories`)
    .then( (res) => res.data)
    .catch( (error) => {
        if (error.status === 500){
            return rejectWithValue(error.error)
        }
        else {
            const msgErr = "Sorry , Error in get Data Categories"
            return  rejectWithValue(msgErr)
        }
    })
})
// END READ CATEGORIES

const newsAndArticles = createSlice({
    name: "newsAndArticles",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getNewsAndArticles.pending , (state) => {
            state.loading = true;
        });
        builder.addCase(getNewsAndArticles.fulfilled , (state ,action) => {
            state.loading = false;
            state.status = "success";
            state.dataNewsAndArticles.push(action.payload);
           // console.log("from redux add case" , action)
        });
        builder.addCase(getNewsAndArticles.rejected , (state , action) => {
            state.loading = false;
            state.status = "failed";
            state.error = action.payload;
        });
        builder.addCase(getCategories.pending , (state) => {
            state.loadingCategories = true
        });
        builder.addCase(getCategories.fulfilled, (state , action) => {
            state.loadingCategories = false;
            state.statusCategories = "success";
            state.categories.push(action.payload);
        });
        builder.addCase(getCategories.rejected , (state , action) => {
            state.loadingCategories = false;
            state.statusCategories = "failed";
            state.errorCategories = action.payload;
          //  console.log("from slice categor" , action)
        })
    }
});

export default newsAndArticles.reducer;