import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import FinancialCalculator from "./components/layout/Financial Calculator/FinancialCalculator";
import Home from "./components/pages/Home";
import PropertyTracker from "./components/layout/Property Tracker/PropertyTracker";
import Calendar from "./components/layout/Calendar/Calendar";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home to="/home" />} />
        <Route path="/financial-calculator" element={<FinancialCalculator />} />
        <Route path="/property-tracker" element={<PropertyTracker />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Layout>
  );
}

export default App;
