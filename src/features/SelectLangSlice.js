import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";


export const language = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
      dir: "ltr",
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "sa",
      dir: "rtl"
    }
];
//const currenLanguageCode = localStorage.getItem("i18nextLng") || "en";
// const currenLanguage = language.find(l => l.code === currenLanguageCode);

const initialState = {
    currentLanguageCode : localStorage.getItem("i18nextLng") || "ar",
    currentLanguage : language.find(l => l.code === localStorage.getItem("i18nextLng") || "en"),
}

 const SelectLangSlice =  createSlice({
    name: "selectLang",
    initialState,
    reducers: {
        changeLang: (state , action) => {
            i18next.changeLanguage(action.payload)
            state.currentLanguageCode = localStorage.getItem("i18nextLng") || "en";
            state.currentLanguage = language.find(l => l.code === localStorage.getItem("i18nextLng"));
           // console.log(state.currentLanguageCode)
        }
    }
 });


 export const { changeLang } = SelectLangSlice.actions
 export default SelectLangSlice.reducer
