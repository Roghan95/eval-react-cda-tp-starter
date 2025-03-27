import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { AuthService } from "../../services/auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const authService = new AuthService();

  useEffect(() => {
    // Check authentication status when component mounts
    setIsLoggedIn(authService.isAuthenticated());
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
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
                <Button onClick={handleLogout}>Déconnexion</Button>
              </li>
            </>
          ) : (
            // Menu pour utilisateurs non connectés
            <>
              <li>
                <Button onClick={handleLoginClick}>Connexion</Button>
              </li>
              <li>
                <Button onClick={handleRegisterClick}>Inscription</Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
