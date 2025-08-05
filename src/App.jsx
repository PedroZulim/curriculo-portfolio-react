import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculo1 from "./pages/CurriculoPedro";
import Curriculo2 from "./pages/CurriculoAna";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PedroZulim" element={<Curriculo1 />} />
        <Route path="/AnaJulia" element={<Curriculo2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
