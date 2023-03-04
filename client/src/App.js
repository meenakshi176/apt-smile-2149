import { Image } from "@chakra-ui/react";
import "./App.css";
import backgroundImage from "./Images/background.png";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Image
        src={backgroundImage}
        className="backgroundImage"
        alt="Background Image"
      />

      <MainRoutes />
    </div>
  );
}

export default App;
