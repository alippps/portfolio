import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} <span>Alify</span>. Dibuat dengan ❤️ menggunakan React
      </p>
    </footer>
  );
}
