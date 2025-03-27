import styles from "./Card.module.css";

export default function Card({ className, children, ...props }) {
  return (
    <div className={`${styles.card} ${className ? className : ""}`} {...props}>
      {children}
    </div>
  );
}
