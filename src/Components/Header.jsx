import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logoDiv}>
          <div className={styles.logo}>
            <img src="../../src/assets/logo_sul_brasil.jpg" alt="logo" />
          </div>
          <h3>Empório da Carne e Hortifruti Sul Brasil</h3>
        </div>
        <div className={styles.contatos}>
          <p>WhatsApp: (14) 99684-8475</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
