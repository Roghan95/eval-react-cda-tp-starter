import React from "react";
import styles from "./Form.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";

const Form = () => {
  return (
    <>
      <h1>Ajouter un film</h1>
      <form className={styles.form}>
        <Label htmlFor="">Titre</Label>
        <Input type="" name="" placeholder="" required></Input>
      </form>
    </>
  );
};

export default Form;
