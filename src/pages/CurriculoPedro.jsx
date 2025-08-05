import { Link } from "react-router-dom";

function Curriculo1() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Pedro</h1>
      <p><strong>Email:</strong> pedro@gmail.com</p>
      <p><strong>Telefone:</strong> (99) 99999-9999</p>

      <h2>Resumo</h2>
      <p>Engenheiro de Dados com experiência em projetos de ETL, pipelines, Big Data e Python.</p>

      <h2>Experiência</h2>
      <ul>
        <li>Empresa X - Engenheiro de Dados (2022 - atual)</li>
        <li>Empresa Y - Analista de Dados (2020 - 2022)</li>
      </ul>

      <h2>Formação</h2>
      <p>Analise e Desenvolvimento de Sistemas</p>
      <p>Pós-Graduação CodeMaster: Especialização avançada em Python</p>

      <Link to="/curriculo-portfolio-react/">← Voltar</Link>
    </div>
  );
}

export default Curriculo1;
