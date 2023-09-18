import { configureStore } from "@reduxjs/toolkit";
import SelectLangReducer from "../features/SelectLangSlice";
import screenReducer from "../features/screenSlice";
import newsReducer from "../features/NewsAndArticles"

const store = configureStore({
    reducer: {
        selectLang: SelectLangReducer,
        screenReducer,
        newsAndArticles: newsReducer,
    }
})

export default store