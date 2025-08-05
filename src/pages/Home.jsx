import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Meus Currículos</h1>
      <p>Escolha qual currículo deseja visualizar:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/PedroZulim">Currículo Pedro</Link></li>
        <li><Link to="/AnaJulia">Currículo Ana Julia</Link></li>
      </ul>
    </div>
  );
}

export default Home;
