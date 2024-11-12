import { useRoutes } from "react-router";
import routes from "~react-pages";
import NotFound from "./component/not-found";


function App() {

  const routing = useRoutes([
    ...routes,
    { path: "*", element: <NotFound /> }
  ]);

  return (
    <>
      {routing}
    </>
  )
}

export default App
