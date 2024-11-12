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

const applyThemeClass = (theme:string) => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);
};

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;