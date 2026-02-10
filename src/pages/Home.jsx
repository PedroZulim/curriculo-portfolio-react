import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      <div className="home-overlay">
        <header className="home-header">
          <p className="home-brand">Zulim&apos;s Tech</p>
          <h1>Portfólio Profissional</h1>
          <p className="home-subtitle">
            Escolha um currículo para visualizar os detalhes de experiência,
            competências e formação.
          </p>
        </header>

        <section className="profile-grid" aria-label="Perfis disponíveis">
          <article className="profile-card">
            <h2>Pedro Henrique Zulim</h2>
            <p>Engenheiro de Dados | Especialista em ETL, Python e AWS.</p>
            <Link to="/PedroZulim" className="profile-link" aria-label="Ver currículo de Pedro Henrique Zulim">
              Ver currículo
            </Link>
          </article>

          <article className="profile-card">
            <h2>Ana Julia</h2>
            <p>
              Estagiária de Direito com atuação em áreas Trabalhista,
              Previdenciária, Civil e Família.
            </p>
            <Link to="/AnaJulia" className="profile-link" aria-label="Ver currículo de Ana Julia">
              Ver currículo
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Home;
