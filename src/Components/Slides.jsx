import styles from "./Slides.module.css";

import frutas from "../assets/frutas.png";

const Slides = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.intro} container`}>
        <article className={styles.article}>
          <h1>Hortifruti § Emporio da Carrne</h1>
        </article>
        <div className={`${styles.foto} `}>
          <img src={frutas} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Slides;
