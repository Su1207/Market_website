import { Route, Routes } from "react-router-dom";
import "./App.css";
import MarketResult from "./pages/MarketResult";
import LabelResult from "./pages/LabelResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketResult />} />
        <Route path="/panelChartRecord/:id" element={<LabelResult />} />
        <Route path="/jodiChartRecord/:id" element={<LabelResult />} />
      </Routes>
    </>
  );
}

export default App;
