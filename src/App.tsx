import { useRoutes } from "react-router";
import { RootState } from "./redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import routes from "~react-pages";
import NotFound from "./component/not-found";
import applyThemeClass from "./utils/applyThemeClass";



function App() {

  const routing = useRoutes([
    ...routes,
    { path: "*", element: <NotFound /> }
  ]);
  
  const theme = useSelector((state: RootState) => state.theme.theme);
  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  return (
    <>
      {routing}
    </>
  )
}

export default App
