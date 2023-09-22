import { configureStore } from "@reduxjs/toolkit";
import SelectLangReducer from "../features/SelectLangSlice";
// import screenReducer from "../features/screenSlice";
import newsReducer from "../features/NewsAndArticlesSlice";
import servicesReducer from "../features/ServicesSlice";
import realEstateReducer from "../features/RealEstateSlice";
import requestReducer from "../features/FormRequestSlice"

const store = configureStore({
    reducer: {
        selectLang: SelectLangReducer,
        newsAndArticles: newsReducer,
        services: servicesReducer,
        realEstates: realEstateReducer,
        request: requestReducer,
       // screenReducer,
    }
})

export default store