import { Route, Routes } from "react-router-dom";
import "./App.css";
import MarketResult from "./pages/MarketResult";
import LabelResult from "./pages/LabelResult";
import About from "./pages/About";
import PrivacyNotice from "./pages/PrivacyNotice";
import TermsOfService from "./pages/TermsOfService";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketResult />} />
        <Route path="/panelChartRecord/:id" element={<LabelResult />} />
        <Route path="/jodiChartRecord/:id" element={<LabelResult />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyNotice />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
