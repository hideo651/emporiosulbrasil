import styles from "./Carnes.module.css";
import asinha from "../assets/acougue/asinha-frango.png";
import bisteca from "../assets/acougue/bisteca-pururuca.png";
import costela from "../assets/acougue/costela-ripa.jpg";
import frango from "../assets/acougue/frango-inteiro.png";
import linguica from "../assets/acougue/linguica-toscana-aurora.jpg";
import maminha from "../assets/acougue/maminha.png";
import mignonSuino from "../assets/acougue/mignon-suino.jpg";
import miolo from "../assets/acougue/miolo-da-alcatra.png";
import mioloAcem from "../assets/acougue/miolo-do-acem-fatiado.png";
import panceta from "../assets/acougue/panceta-especial.jpg";
import picanha from "../assets/acougue/picanha-prime.png";
import tBone from "../assets/acougue/t-bone.jpg";
import acougue from "../assets/acougue.jpg";

const Carnes = () => {
  const produtos = [
    { nome: "Asinha de Frango", img: asinha },
    { nome: "Bisteca Pururuca", img: bisteca },
    { nome: "Costela Ripa", img: costela },
    { nome: "Frango Inteiro", img: frango },
    { nome: "Linguiça", img: linguica },
    { nome: "Maminha", img: maminha },
    { nome: "Miolo do Acém ", img: mioloAcem },
    { nome: "Panceta Especial", img: panceta },
    { nome: "Picanha Prime", img: picanha },
    { nome: "T-Bone", img: tBone },
    { nome: "Alcatra", img: miolo },
    { nome: "Mignon Suino", img: mignonSuino },
  ];

  return (
    <section className={`${styles.section}`}>
      <div className="container">
        <article className={styles.article}>
          <div className={styles.conteudoInfo}>
            <h2 className="">Casa de Carnes Sul Brasil</h2>
            <p>
              Bem-vindo à Casa de Carnes Sul Brasil, onde a qualidade é nosso
              compromisso. Oferecemos uma seleção cuidadosa das melhores carnes,
              garantindo sabor e frescor em cada corte. Venha experimentar o que
              há de melhor para suas receitas!
            </p>
          </div>
          <div className={styles.img}>
            <img src={acougue} alt="" />
          </div>
        </article>
        <div className={styles.produtos}>
          <h2>Cortes de carne</h2>
          <ul className={styles.lista}>
            {produtos.map((e, index) => {
              return (
                <li key={index}>
                  <div>
                    <img src={e.img} alt={e.nome} />
                  </div>
                  <p>{e.nome}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carnes;
