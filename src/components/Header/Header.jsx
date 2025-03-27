import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est connecté au chargement du composant
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Fonction de connexion
  const handleLogin = () => {
    localStorage.setItem("userToken", "example-token");
    setIsLoggedIn(true);
    navigate("/");
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Fonction de redirection vers la page d'inscription
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/films"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Films
            </NavLink>
          </li>

          {isLoggedIn ? (
            // Menu pour utilisateurs connectés
            <>
              <li>
                <NavLink
                  to="/ajouter"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  Ajouter
                </NavLink>
              </li>
              <li>
                <button className={styles.authButton} onClick={handleLogout}>
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            // Menu pour utilisateurs non connectés
            <>
              <li>
                <button className={styles.authButton} onClick={handleLogin}>
                  Connexion
                </button>
              </li>
              <li>
                <button className={styles.authButton} onClick={handleRegister}>
                  Inscription
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
