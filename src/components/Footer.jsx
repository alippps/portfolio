import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        ©{new Date().getFullYear()} <span>Alif</span> || Alffar Tech
      </p>
      <p>{new Date().toLocaleString()} <span>Test Waktu lokal</span></p>
    </footer>
  );
}
