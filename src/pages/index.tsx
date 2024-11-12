import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { RootState } from "@/redux";

function Index() {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.theme);

  const toogleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toogleTheme}>
        {theme == "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </div>
  );
}

export default Index;
