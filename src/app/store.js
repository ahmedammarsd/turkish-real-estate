import { configureStore } from "@reduxjs/toolkit";
import SelectLangReducer from "../features/SelectLangSlice";
import screenReducer from "../features/screenSlice";
import newsReducer from "../features/NewsAndArticlesSlice";
import servicesReducer from "../features/ServicesSlice";
import realEstateReducer from "../features/RealEstateSlice";

const store = configureStore({
    reducer: {
        selectLang: SelectLangReducer,
        newsAndArticles: newsReducer,
        services: servicesReducer,
        realEstates: realEstateReducer,
        screenReducer,
    }
})

export default store