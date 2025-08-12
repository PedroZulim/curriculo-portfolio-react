import { Link } from "react-router-dom";
import "../styles/Home.css"

function Home() {
  return (
    <body class="home-page text-center">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
            <h3 class="masthead-brand">Zulim's Tech</h3>
            <nav class="nav nav-masthead justify-content-center">
              <a class="nav-link active" href="#">Home</a>
              <a class="nav-link" href="#/PedroZulim">Pedro Zulim</a>
              <a class="nav-link" href="#/AnaJulia">Ana Julia</a>
            </nav>
          </div>
        </header>

        <main role="main" class="inner cover">
          <h1 class="cover-heading">Cover your page.</h1>
          <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>

        <footer class="mastfoot mt-auto">

        </footer>
      </div>
    </body>
  );
}

export default Home;
