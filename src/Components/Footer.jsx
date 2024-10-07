import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.info} container`}>
        <h2>Emporio da Carne e Hortifruti Sul Brasil</h2>
        <p>Alguns direitos reservados 2024</p>
        <div className={styles.infoLinke}>
          <p>
            Desenvolvido por:{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ayrton-hideo-hirata-29aa4367/"
            >
              Ayrton Hideo Hirata
            </a>
          </p>
          <div className={styles.linkedin}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ayrton-hideo-hirata-29aa4367/"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
