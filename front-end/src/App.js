import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Authentication from "./Components/Athentication/Authentication";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={true ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
