import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import ApiRickAndMorty from "./pages/ApiRickAndMorty";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ApiRickAndMorty />}/>
        <Route path='/' element={<About />}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App