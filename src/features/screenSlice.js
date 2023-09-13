import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screenWidth: window.innerWidth,
    screenY: window.scrollY
}

const screenSizes = createSlice({
    name: "screenSizes",
    initialState,
    reducers: {
        getScrollY: (state) => {
            state.screenY = window.scrollY;
        },
        getScreenWidth: (state) => {
            state.screenWidth = window.innerWidth;
        }
    }
});

export const { getScrollY , getScreenWidth } = screenSizes.actions;
export default screenSizes.reducer