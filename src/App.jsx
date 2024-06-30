import { Route, Routes } from "react-router-dom";
import "./App.css";
import MarketResult from "./pages/MarketResult";
import LabelResult from "./pages/LabelResult";
import About from "./pages/About";
import PrivacyNotice from "./pages/PrivacyNotice";
import TermsOfService from "./pages/TermsOfService";
import ContactPage from "./pages/ContactPage";
import clearMarket from "./components/clearMarket";
import FreeFixGamePage from "./pages/FreeFixGamePage";
import KhatriPannaChart from "./pages/KhatriPannaChart";
import MatkaFinalChart from "./pages/MatkaFinalChart";
import MatkaJodiChart from "./pages/MatkaJodiChart";
import OpenToCloseByDate from "./pages/OpenToCloseByDate";
import MatkaJodiFamilyChart from "./pages/MatkaJodiFamilyChart";
import PanelCountChart from "./pages/PanelCountChart";
import PanelTotalChart from "./pages/PanelTotalChart";
import AllCard from "./pages/AllCard";

function App() {
  clearMarket();

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
        <Route path="/matka-free-open" element={<FreeFixGamePage />} />
        <Route
          path="/khatris-favourite-panna-chart"
          element={<KhatriPannaChart />}
        />
        <Route path="/matka-final-number-chart" element={<MatkaFinalChart />} />
        <Route path="/matka-jodi-count-chart" element={<MatkaJodiChart />} />
        <Route
          path="/fix-open-to-close-by-date"
          element={<OpenToCloseByDate />}
        />
        <Route
          path="/matka-jodi-family-chart"
          element={<MatkaJodiFamilyChart />}
        />
        <Route path="/panel-count-chart" element={<PanelCountChart />} />
        <Route path="/panel-total-chart" element={<PanelTotalChart />} />
        <Route
          path="/All-22-Card-Panna-Penal-Patti-Chart"
          element={<AllCard />}
        />
      </Routes>
    </>
  );
}

export default App;
