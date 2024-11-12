import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";

function Index() {
  const dispatch = useDispatch();

  const toogleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toogleTheme}>
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Index;
