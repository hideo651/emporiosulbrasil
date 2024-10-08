import styles from "./Header.module.css";
import logo from "../assets/logo_sul_brasil.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logoDiv}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.info}>
            <h3>Empório da Carne e Hortifruti Sul Brasil</h3>
            <p>Endereço: Rua Inconfidência, 72 - Marília, SP</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
