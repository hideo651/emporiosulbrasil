import styles from "./Hortifruti.module.css";
import foto from "../assets/loja.jpg";

const Hortifruti = () => {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.img}>
        <img src={foto} alt="" />
      </div>
      <div className={styles.conteudoInfo}>
        <h3>Hortifruti Sul Brasil</h3>
        <p>
          Bem-vindo ao Hortifruti Sul Brasil, onde você encontra uma seleção
          fresca e variada de frutas, legumes e laticínios de alta qualidade.
          Localizado no coração da cidade de Marília, oferecemos produtos
          cuidadosamente selecionados para garantir o melhor para a sua mesa.
          Visite-nos e descubra o sabor da frescura!
        </p>
      </div>
    </section>
  );
};

export default Hortifruti;
