import { Link } from "react-router-dom";
import "../styles/CurriculoPedro.css";

function CurriculoPedro() {
  const competencias = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Dagster",
    "DLT",
    "Sling",
    "AWS (S3, Redshift)",
    "Snowflake",
    "Web Scraping",
    "ETL",
    "Agile",
    "Lean",
  ];

  return (
    <main className="curriculo-pedro-page">
      <div className="curriculo-container">
        <header className="hero-card">
          <div>
            <p className="hero-role">Engenheiro de Dados</p>
            <h1>Pedro Henrique de Souza Zulim</h1>
            <p className="hero-subtitle">Especialista em ETL, Python e AWS</p>
          </div>
          <div className="hero-contact">
            <a href="tel:+554399797388">📞 (43) 9 9979-7388</a>
            <a href="mailto:pedrozulim2@gmail.com">✉️ pedrozulim2@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/pedro-zulim"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn @Pedro Zulim
            </a>
            <p>📍 Londrina, PR | Home Office, Híbrido ou Presencial</p>
            <p>🧳 Disponível para atuar em outras cidades</p>
          </div>
        </header>

        <section className="content-grid">
          <article className="content-card">
            <h2>Perfil profissional</h2>
            <p>
              Profissional de Engenharia de Dados com experiência sólida em
              projetos de ingestão, transformação e automação de dados em
              ambientes escaláveis. Atua com foco em performance, otimização de
              custos, governança e integração de IA aplicada ao negócio para
              ganho de produtividade e valor.
            </p>
          </article>

          <article className="content-card">
            <h2>Experiência profissional</h2>
            <h3>Tata Consultancy Services — Londrina, PR</h3>
            <p className="item-title">Engenheiro de Dados Júnior · Data Ingestion (2022 — 2025)</p>
            <ul>
              <li>Desenvolvimento e manutenção de pipelines ETL de alto desempenho.</li>
              <li>Normalização e padronização de dados em AWS Redshift.</li>
              <li>Automação de ingestão via Web Scraping e integração com sistemas corporativos.</li>
              <li>Utilização de Dagster, Sling e DLT para orquestração e carga de dados.</li>
            </ul>
            <p className="item-title">Estágio · Full Stack (2021 — 2022)</p>
            <ul>
              <li>Desenvolvimento com HTML5, CSS3, JavaScript e Java.</li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Formação acadêmica</h2>
            <ul>
              <li>Pós-graduação em Especialização Avançada em Python — UTFPR (2025)</li>
              <li>Graduação em Análise e Desenvolvimento de Sistemas — UTFPR (2019 — 2025)</li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Certificações e cursos</h2>
            <ul>
              <li>White Belt (2025)</li>
              <li>Data Engineering (2025)</li>
              <li>Dagster (2025)</li>
              <li>DBT (2025)</li>
              <li>Spark (2024)</li>
              <li>Agile (2023)</li>
              <li>NumPy (2023)</li>
              <li>Pandas (2023)</li>
              <li>Python (2021)</li>
              <li>Robótica e Automação II — Robolon/UEL (2015)</li>
            </ul>
          </article>

          <article className="content-card full-width">
            <h2>Competências técnicas</h2>
            <div className="skills-list">
              {competencias.map((competencia) => (
                <span key={competencia} className="skill-chip">
                  {competencia}
                </span>
              ))}
            </div>
          </article>

          <article className="content-card full-width">
            <h2>Diferenciais</h2>
            <ul>
              <li>
                Visão estratégica para integração de IA em processos de dados.
              </li>
              <li>
                Capacidade de resolver problemas complexos com soluções
                criativas e custo-efetivas.
              </li>
              <li>
                Flexibilidade para atuar em múltiplas frentes de projetos,
                do desenvolvimento à otimização.
              </li>
            </ul>
          </article>
        </section>

        <div className="actions-row">
          <Link to="/" className="back-button">
            ← Voltar para a home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CurriculoPedro;
