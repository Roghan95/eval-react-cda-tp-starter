import styles from "./Button.module.css";

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={`${styles.button} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
