import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Ajouter from "./pages/Ajouter/Ajouter";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/ajouter" element={<Ajouter />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
