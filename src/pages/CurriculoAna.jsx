import { Link } from "react-router-dom";

function Curriculo1() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ana Julia</h1>
      <p><strong>Email:</strong> anajulia@outlook.com</p>
      <p><strong>Telefone:</strong> (99) 99999-9999</p>

      <h2>Resumo</h2>
      <p>Estágiária de Advogada</p>

      <h2>Experiência</h2>
      <ul>
        <li>Estagiária (2024 - Atual)</li>
      </ul>

      <h2>Formação</h2>
      <p>Bacharelado em Direito</p>

      <Link to="/">← Voltar</Link>
    </div>
  );
}

export default Curriculo1;
