import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Currículos</h1>
        <p>Escolha qual currículo deseja visualizar:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/curriculo-portfolio-react/PedroZulim">Currículo Pedro</Link></li>
          <li><Link to="/curriculo-portfolio-react/AnaJulia">Currículo Ana Julia</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
