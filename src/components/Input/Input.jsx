import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`${styles.input} ${className ? className : ""}`}
      {...props}
    />
  );
});

export default Input;
