import { Link } from "react-router-dom";
import "../styles/CurriculoBase.css";
import "../styles/CurriculoAna.css";

function CurriculoAna() {
  const competencias = [
    "Redação jurídica",
    "Pesquisa jurisprudencial",
    "Direito Trabalhista",
    "Direito Previdenciário",
    "Direito Civil",
    "Direito de Família",
    "Atendimento ao cliente",
    "Organização processual",
    "Pacote Office",
    "Comunicação interpessoal",
  ];

  return (
    <main className="curriculo-page curriculo-ana-page">
      <div className="curriculo-container">
        <header className="hero-card ana-hero-card" aria-label="Resumo profissional de Ana Julia">
          <div>
            <p className="hero-role">Estagiária de Direito</p>
            <h1>Ana Julia</h1>
            <p className="hero-subtitle">
              Atuação em Direito Trabalhista, Previdenciário, Civil e de Família
            </p>
          </div>
          <div className="hero-contact">
            <p>✉️ E-mail profissional disponível sob solicitação</p>
            <p>📞 Telefone profissional disponível sob solicitação</p>
            <p>📍 Londrina, PR</p>
            <p>⚖️ Disponível para estágio presencial, híbrido ou remoto</p>
          </div>
        </header>

        <section className="content-grid" aria-label="Conteúdo do currículo de Ana Julia">
          <article className="content-card">
            <h2>Perfil profissional</h2>
            <p>
              Estagiária em escritório de referência em Londrina, com experiência
              em suporte jurídico, elaboração de peças processuais, pesquisas
              legislativas e jurisprudenciais, além de atendimento a clientes.
              Atua com organização, ética e foco em resultados para apoiar a
              condução eficiente dos processos.
            </p>
          </article>

          <article className="content-card">
            <h2>Experiência profissional</h2>
            <h3>Escritório de Advocacia — Londrina, PR</h3>
            <p className="item-title">Estagiária de Direito (2023 — atual)</p>
            <ul>
              <li>Elaboração de petições, recursos e manifestações jurídicas.</li>
              <li>
                Pesquisa de legislação, doutrina e jurisprudência para suporte
                técnico.
              </li>
              <li>Atendimento a clientes e organização de documentos processuais.</li>
              <li>
                Acompanhamento de prazos e movimentações processuais em múltiplas
                áreas do Direito.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Formação acadêmica</h2>
            <ul>
              <li>
                Bacharelado em Direito — Universidade Estadual de Londrina (em
                andamento)
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Áreas de atuação</h2>
            <ul>
              <li>Direito Trabalhista</li>
              <li>Direito Previdenciário</li>
              <li>Direito Civil</li>
              <li>Direito de Família</li>
            </ul>
          </article>

          <article className="content-card full-width">
            <h2>Competências</h2>
            <div className="skills-list">
              {competencias.map((competencia) => (
                <span key={competencia} className="skill-chip ana-skill-chip">
                  {competencia}
                </span>
              ))}
            </div>
          </article>

          <article className="content-card full-width">
            <h2>Diferenciais</h2>
            <ul>
              <li>
                Comunicação clara e empática no relacionamento com clientes e
                equipe.
              </li>
              <li>
                Organização para lidar com demandas simultâneas e cumprimento de
                prazos.
              </li>
              <li>
                Evolução contínua em técnica jurídica e atualização legislativa.
              </li>
            </ul>
          </article>
        </section>

        <div className="actions-row">
          <Link to="/" className="back-button ana-back-button">
            ← Voltar para a home
          </Link>
          <Link to="/PedroZulim" className="secondary-button">
            Ver currículo do Pedro Zulim
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CurriculoAna;
