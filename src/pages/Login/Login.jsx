import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userToken", "example-token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.login}>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
