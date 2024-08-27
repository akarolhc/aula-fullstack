import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Video from "./components/Video";
import Forms from "./components/Forms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <List titulo="Minha tela exemplo"/>
        <Video />
        <Forms />

        <section>
          <h2>Grade de Horários - Quarto Semestre</h2>
          <table className="table-bordered">
            <tr>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
            <tr>
              <td>Dev. Full-Stack</td>
              <td>Dev. Full-Stack</td>
              <td>Codificação Segura</td>
              <td>Dev. Sistemas Embarcados</td>
              <td>Eng. de Software</td>
            </tr>
            <tr>
              <td>19h às 22h</td>
              <td>19h às 22h</td>
              <td>19h às 22h</td>
              <td>19h às 22h</td>
              <td>19h às 22h</td>
            </tr>
          </table>
        </section>

        <section className="last">
          <h2>Sites Favoritos</h2>
          <ol>
            <li>
              <a href="https://www.google.com" target="_blank">
                Google
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.github.com" target="_blank">
                GitHub
              </a>
            </li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
