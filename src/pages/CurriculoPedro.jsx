import { Link } from "react-router-dom";
import "../styles/CurriculoPedro.css";

function Curriculo1() {
  return (
    <div className="curriculo-pedro">
      <div className="container">
          <h1>Pedro</h1>
          <p><strong>Email:</strong> pedro@gmail.com</p>
          <p><strong>Telefone:</strong> (99) 9 9999-9999</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pedro-zulim-1b23291a4">@Pedro Zulim</a></p>

        <h2>Objetivo</h2>
        <p>
          Busco constantemente aprimorar minhas habilidades em Python e Engenharia de Dados,
          com foco em aplicar meus conhecimentos acadêmicos na prática e desenvolver soluções
          com Inteligência Artificial que otimizem processos pessoais e corporativos.
        </p>

        <h2>Resumo Profissional</h2>
        <ul>
          <li>Engenheiro de Dados Júnior com experiência em ETL, ingestão de dados, Redshift e WebScraping.</li>
          <li>Vivência com ferramentas como PySpark, Pandas, AWS, Snowflake e Dagster.</li>
          <li>Formação em Análise e Desenvolvimento de Sistemas com Pós-Graduação em Python.</li>
        </ul>

        <h2>Experiência Profissional</h2>
        <ul>
          <li>
            <strong>Tata Consultancy Services</strong> – Estagiário Full Stack (2021 - 2022)<br />
            - Projetos com HTML5, CSS3, JavaScript e Java
          </li>
          <li>
            <strong>Tata Consultancy Services</strong> – Engenheiro de Dados Júnior (2022 - 2025)<br />
            - Normalização e ingestão de dados com Redshift<br />
            - Automações com ETL e WebScraping
          </li>
        </ul>

        <h2>Formação Acadêmica</h2>
        <ul>
          <li><strong>UTFPR</strong> – Análise e Desenvolvimento de Sistemas (2019 - 2024)</li>
          <li><strong>UTFPR</strong> – Pós-Graduação CodeMaster: Especialização Avançada em Python (2025)</li>
        </ul>

        <h2>Cursos e Certificações</h2>
        <ul>
          <li>Curso de Robótica e Automação – II Robolon (2015)</li>
          <li>Curso de Python (2021)</li>
          <li>Curso de NumPy (2023)</li>
          <li>Curso de Pandas (2023)</li>
          <li>Curso de Agile (2023)</li>
          <li>Curso de Engenharia de Dados (2025)</li>
          <li>Curso de DBT (2025)</li>
          <li>Curso de Dagster (2025)</li>
          <li>Certificado White Belt (2025)</li>
        </ul>

        <h2>Conhecimentos Técnicos</h2>
        <ul>
          <li>Python (WebScraping, Pandas, NumPy)</li>
          <li>SQL, ETL, Dagster, DLT, Sling</li>
          <li>Amazon S3, AWS Redshift, Snowflake</li>
          <li>PySpark</li>
        </ul>

        <h2>Informações Adicionais</h2>
        <ul>
          <li>Brasileiro</li>
          <li>24 anos</li>
          <li>Solteiro</li>
          <li>Londrina, Paraná</li>
          <li>Disponível para Home Office, presenciais ou híbridas</li>
        </ul>

        <Link to="/" className="back-link">← Voltar</Link>
        </div>
    </div>
  );
}

export default Curriculo1;
