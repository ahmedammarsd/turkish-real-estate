import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";
import { useTranslation } from "react-i18next";

const initialState = {
    loading: false,
    realEstates: [],
    status:"",
    error: null,
}
// headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//     "Access-Control-Allow-Origin": "*",
// }
//'Content-Type': 'application/json',
// READ REAL ESTATE
export const getRealEstates = createAsyncThunk("getRealEstates" , async ({}, thunkAPI) => {
    const { t } = useTranslation();
    // try{
    // const response = await fetch(`${BaseUrl}real_estate`)
    // const data = await response.data;
    // return data
    // } 
    // catch (err) {
    //     console.log(err)
    //     return err || "nothing"
    // }
    return axios.get(`${BaseUrl}real_estate`,{
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then( (res) => res.data)
    .catch( (error) => {
        if (error.status === 500){
            return thunkAPI.rejectWithValue(error.error)
        }
        else {
            const msgErr = t("errorInGet")
            return  thunkAPI.rejectWithValue(msgErr)
        }
    })

    // try{
    //     const res = await axios.get(`${BaseUrl}real_estate`);
    //     return res.data;
    // }
    // catch (errr){
    //     return errr
    // }
})
// END READ REAL ESTATE

//===================== STOPS ==================
// READ STATES
// export const getStates = createAsyncThunk("getStates" , ({}, thunkAPI) => {
//     const { t } = useTranslation()
//     return axios.get(`${BaseUrl}states`)
//     .then((response) => response.data)
//     .catch((error) => {
//         if (error.status === 500){
//             return thunkAPI.rejectWithValue(error.error)
//         }
//         else {
//             const msgErr = t("errorInGet")
//             return  thunkAPI.rejectWithValue(msgErr)
//         }
//     })
// })
// END READ STATES

//===================== STOPS ==================
// READ COMPOUNDS  
// export const getCompounds = createAsyncThunk("getCompounds" , ({}, thunkAPI) => {
//     const { t } = useTranslation();
//     return axios.get(`${BaseUrl}states`)
//     .then((response) => response.data)
//     .catch((error) => {
//         if (error.status === 500){
//             return thunkAPI.rejectWithValue(error.error)
//         }
//         else {
//             const msgErr = t("errorInGet")
//             return  thunkAPI.rejectWithValue(msgErr)
//         }
//     })
// })
// END READ COMPOUNDS

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
        });
        //===================== STOPS ==================
        // builder.addCase(getStates.pending , (state) => {
        //     state.loadingStates = true;
        // });
        // builder.addCase(getStates.fulfilled , (state , action) => {
        //     state.loadingStates = false;
        //     state.statusStates = "success";
        //     state.states.push(action.payload);
        // })
        // builder.addCase(getStates.rejected , (state , action) => {
        //     state.loadingStates = false;
        //     state.statusStates = "failed";
        //     state.errorStates = action.payload;
        // })
    }
});

export default realEstates.reducer ;