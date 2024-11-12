import applyThemeClass from "@/utils/applyThemeClass";
import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    theme: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        setTheme(state, action){
            state.theme = action.payload;
            applyThemeClass(action.payload);
        },
        toggleTheme(state){
            const newTheme:string = state.theme === "light" ? "dark" : "light";
            state.theme = newTheme;
            applyThemeClass(newTheme);
        }
    }
})

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;