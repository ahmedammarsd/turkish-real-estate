import { configureStore } from "@reduxjs/toolkit";
import SelectLangReducer from "../features/SelectLangSlice";
import screenReducer from "../features/screenSlice";

const store = configureStore({
    reducer: {
        selectLang: SelectLangReducer,
        screenReducer,
    }
})

export default store