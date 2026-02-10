import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurriculoPedro from "./pages/CurriculoPedro";
import CurriculoAna from "./pages/CurriculoAna";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PedroZulim" element={<CurriculoPedro />} />
        <Route path="/AnaJulia" element={<CurriculoAna />} />
      </Routes>
    </Router>
  );
}

export default App;
