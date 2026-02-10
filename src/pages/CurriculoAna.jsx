import { Link } from "react-router-dom";
import "../styles/CurriculoAna.css";

function CurriculoAna() {
  return (
    <main className="ana-julia-page container py-4">
      {/* Cabeçalho */}
      <section className="row g-4 align-items-center mb-4">
        <div className="col-12 col-md-8">
          <h1 className="display-6 mb-0">Ana Julia</h1>
          <p className="text-body-secondary mb-2">Estagiária de Direito</p>
          <div className="d-flex flex-wrap gap-2">
            <a
              href="mailto:anajulia@email.com"
              className="btn btn-outline-primary btn-sm"
            >
              <i className="bi bi-envelope"></i> Email
            </a>
            <a
              href="tel:+550000000000"
              className="btn btn-outline-secondary btn-sm"
            >
              <i className="bi bi-telephone"></i> Telefone
            </a>
            <Link to="/" className="btn btn-light btn-sm">
              ← Voltar
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4 text-md-end">
          <span className="badge text-bg-dark me-2">Trabalhista</span>
          <span className="badge text-bg-dark me-2">Previdenciário</span>
          <span className="badge text-bg-dark me-2">Civil</span>
          <span className="badge text-bg-dark">Família</span>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 card-title">Resumo</h2>
              <p className="mb-3">
                Estagiária em um dos escritórios mais reconhecidos de Londrina, atuando
                nas áreas de Direito Trabalhista, Previdenciário, Civil e de Família.
                Experiência no suporte jurídico, elaboração de peças processuais, pesquisas
                e atendimento a clientes.
              </p>
            </div>
          </div>
          
          {/* Formação */}
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h2 className="h5 card-title">Formação Acadêmica</h2>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-mortarboard"></i> Bacharelado em Direito — Universidade Estadual de Londrina (em andamento)
                </li>
              </ul>
            </div>
          </div>

          {/* Experiência */}
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h2 className="h5 card-title">Experiência Profissional</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h3 className="h6 mb-1">Estagiária de Direito — Escritório de Advocacia X</h3>
                    <small className="text-body-secondary">2023 — atual</small>
                  </div>
                  <p className="mb-1">
                    Apoio na elaboração de petições, recursos e manifestações jurídicas.
                    Realização de pesquisas legislativas e jurisprudenciais, atendimento
                    ao cliente, organização documental e acompanhamento processual nas áreas:
                    Trabalhista, Previdenciária, Civil e de Família.
                  </p>
                  <div className="small">
                    <span className="badge text-bg-secondary me-1">Trabalhista</span>
                    <span className="badge text-bg-secondary me-1">Previdenciário</span>
                    <span className="badge text-bg-secondary me-1">Civil</span>
                    <span className="badge text-bg-secondary">Família</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Competências */}
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h2 className="h5 card-title">Competências</h2>
              <ul className="list-unstyled mb-0">
                <li>• Redação jurídica clara e precisa</li>
                <li>• Pesquisa legislativa e jurisprudencial</li>
                <li>• Atendimento humanizado e profissional</li>
                <li>• Organização de prazos e documentos processuais</li>
                <li>• Conhecimento em Direito Trabalhista, Previdenciário, Civil e de Família</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lateral */}
        <aside className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h6 text-uppercase text-body-secondary">Áreas de Atuação</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Direito Trabalhista</li>
                <li className="list-group-item">Direito Previdenciário</li>
                <li className="list-group-item">Direito Civil</li>
                <li className="list-group-item">Direito de Família</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default CurriculoAna;
