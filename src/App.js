import { Route, Routes } from "react-router-dom";
import "./App.css";
import Rent from "./pages/Rent/Rent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Rent />}></Route>
        <Route path="/rent" element={<Rent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
