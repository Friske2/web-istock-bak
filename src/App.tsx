import { useRoutes } from "react-router-dom";
import Routes from "./routes";
function App() {
  const element = useRoutes(Routes);
  return <div>{element}</div>;
}

export default App;
