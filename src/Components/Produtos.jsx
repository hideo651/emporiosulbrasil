import styles from "./Produtos.module.css";

import Pesego from "../assets/mercadoria/image3.png";
import Verdura from "../assets/mercadoria/image4.png";
import Maca from "../assets/mercadoria/image6.png";
import Laranja from "../assets/mercadoria/image7.png";
import Batata from "../assets/mercadoria/image8.png";
import Cenoura from "../assets/mercadoria/image9.png";
import Brocolis from "../assets/mercadoria/image1.png";
import Tomate from "../assets/mercadoria/image2.png";

const Produtos = () => {
  const produtos = [
    { name: "Pesego", img: Pesego, cor: "#FEEFEA" },
    { name: "Verdura", img: Verdura, cor: "#FFF3FF" },
    { name: "Maça", img: Maca, cor: "#FEEFEA" },
    { name: "Laranja", img: Laranja, cor: "#ECFFEC" },
    { name: "Batata", img: Batata, cor: "#FFFCEB" },
    { name: "Cenoura", img: Cenoura, cor: "#DEF9EC" },
    { name: "Tomate", img: Tomate, cor: "#FEEFEA" },
    {
      name: "Brocolis",
      img: Brocolis,
      cor: "#DEF9EC",
    },
  ];
  return (
    <section className={`${styles.section} container`}>
      <h2>Nossos produtos</h2>
      <ul className={styles.produtos}>
        {produtos.map((produto, index) => {
          return (
            <li key={index} style={{ background: produto.cor }}>
              <img src={produto.img} alt="" />
              <p>{produto.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Produtos;
