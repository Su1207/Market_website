import { Route, Routes } from "react-router-dom";
import "./App.css";
import MarketResult from "./pages/MarketResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketResult />} />
      </Routes>
    </>
  );
}

export default App;
