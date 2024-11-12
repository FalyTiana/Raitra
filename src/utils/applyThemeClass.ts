const applyThemeClass = (theme: string) => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(`${theme}`);
};

export default applyThemeClass