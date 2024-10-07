import "./App.css";
import Carnes from "./Components/Carnes";
import Delivery from "./Components/Delivery";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hortifruti from "./Components/Hortifruti";
import Produtos from "./Components/Produtos";
import Slides from "./Components/Slides";

function App() {
  return (
    <>
      <Header />
      <Slides />
      <Hortifruti />
      <Produtos />
      <Carnes />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;
