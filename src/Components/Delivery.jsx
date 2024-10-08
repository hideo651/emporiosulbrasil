import { FaWhatsapp } from "react-icons/fa";
import styles from "./Delivery.module.css";
import icone from "../assets/sacola.png";
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import delivery from "../assets/delivery.png";
import { SiIfood } from "react-icons/si";
import { GrRestaurant } from "react-icons/gr";

const Delivery = () => {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <div className={styles.icone}>
            <img src={icone} alt="" />
          </div>
          <h3>Empório da Carne e Hortifruti Sul Brasil</h3>
        </div>
        <ul className={styles.infos}>
          <li>
            <p>
              <LuMapPin size={20} color="#5F9548" /> <span>Endereço:</span> Rua
              Inconfidência, 72 - Marília, SP
            </p>
          </li>
          <li>
            <p>
              <FaWhatsapp size={20} color="#5F9548" /> <span>WhastApp:</span>{" "}
              (14) 99684-8475
            </p>
          </li>
          <li>
            <p>
              <MdOutlineEmail size={20} color="#5F9548" /> <span>Email:</span>{" "}
              sulbrasil@email.com
            </p>
          </li>
          <li>
            <p>
              <FaRegClock size={20} color="#5F9548" /> <span>Horário:</span>{" "}
              8:00 - 18:00, Segunda à Sexta
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.conteudo}>
          <div className={styles.titulo}>
            <div className={styles.icone}>
              <img src={delivery} alt="" />
            </div>
            <h3>Delivery Sul Brasil</h3>
          </div>
          <ul className={styles.infos}>
            {/* <li>
              <p>
                <SiIfood size={20} color="red" /> <span>Ifood:</span> Estamos
                atendendo no aplicativo
              </p>
            </li> */}
            <li>
              {" "}
              <p>
                <GrRestaurant size={20} color="#5F9548" />{" "}
                <span>Restaurante:</span> Condições especiais para donos de
                restaurantes.
              </p>
            </li>
            {/* <li>
              <p>
                <FaWhatsapp size={20} color="#5F9548" /> <span>WhatsApp:</span>{" "}
                Atendemos pedidos via WhatsApp com promoções diarias.
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
