import { Link } from "react-router-dom";

function Curriculo1() {
  return (
    <main className="container py-4">
      {/* Header */}
      <section className="row g-4 align-items-center mb-4">
        <div className="col-12 col-md-8">
          <h1 className="display-6 mb-0">Pedro Zulim</h1>
          <p className="text-body-secondary mb-2">Engenheiro de Dados</p>
          <div className="d-flex flex-wrap gap-2">
            <a href="mailto:pedro@gmail.com" className="btn btn-outline-primary btn-sm">
              <i className="bi bi-envelope"></i> Email
            </a>
            <a href="tel:+559999999999" className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-telephone"></i> Telefone
            </a>
            <Link to="/" className="btn btn-light btn-sm">
              ← Voltar
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4 text-md-end">
          <span className="badge text-bg-dark me-2">Python</span>
          <span className="badge text-bg-dark me-2">ETL</span>
          <span className="badge text-bg-dark me-2">AWS</span>
          <span className="badge text-bg-dark">Spark</span>
        </div>
      </section>

      {/* Resumo */}
      <section className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 card-title">Resumo</h2>
              <p className="mb-0">
                Engenheiro de Dados com experiência em projetos de ETL, pipelines, Big Data e Python. 
                Forte atuação em AWS (glue/lambdas/step functions), modelagem e padronização de dados.
              </p>
            </div>
          </div>

          {/* Experiência em timeline responsiva */}
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h2 className="h5 card-title">Experiência</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h3 className="h6 mb-1">Engenheiro de Dados — Empresa X</h3>
                    <small className="text-body-secondary">2022 — atual</small>
                  </div>
                  <p className="mb-1">Construção de pipelines em AWS, padronização e automações.</p>
                  <div className="small">
                    <span className="badge text-bg-secondary me-1">AWS</span>
                    <span className="badge text-bg-secondary me-1">Dagster</span>
                    <span className="badge text-bg-secondary">Python</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h3 className="h6 mb-1">Analista de Dados — Empresa Y</h3>
                    <small className="text-body-secondary">2020 — 2022</small>
                  </div>
                  <p className="mb-1">ETL, modelagem e relatórios.</p>
                  <div className="small">
                    <span className="badge text-bg-secondary me-1">Python</span>
                    <span className="badge text-bg-secondary">SQL</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Formação */}
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h2 className="h5 card-title">Formação</h2>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-mortarboard"></i> Análise e Desenvolvimento de Sistemas
                </li>
                <li>
                  <i className="bi bi-patch-check"></i> Pós-Graduação CodeMaster: Especialização Avançada em Python
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lateral com skills & proficiências */}
        <aside className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h6 text-uppercase text-body-secondary">Competências</h2>
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span>Python</span><span>Avançado</span>
                </div>
                <div className="progress" role="progressbar" aria-label="Python" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span>AWS</span><span>Intermediário+</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="mb-0">
                <div className="d-flex justify-content-between">
                  <span>Spark</span><span>Básico</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Curriculo1;
