import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Currículos</h1>
        <p>Escolha qual currículo deseja visualizar:</p>
        <ul>
          <li><Link to="/PedroZulim">Currículo Pedro</Link></li>
          <li><Link to="/AnaJulia">Currículo Ana Julia</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
