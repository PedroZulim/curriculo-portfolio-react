import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculo1 from "./pages/CurriculoPedro";
import Curriculo2 from "./pages/CurriculoAna";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/curriculo-portfolio-react/home" element={<Home />} />
        <Route path="/curriculo-portfolio-react/PedroZulim" element={<Curriculo1 />} />
        <Route path="/curriculo-portfolio-react/AnaJulia" element={<Curriculo2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
