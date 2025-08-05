import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculo1 from "./pages/CurriculoPedro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PedroZulim" element={<Curriculo1 />} />
        {/* <Route path="/curriculo2" element={<Curriculo2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
