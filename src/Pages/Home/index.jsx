import "./Home.css";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import aztecaImagen from "../../assets/images/aztecaImagen.jpg";
import kameHouse from "../../assets/images/kameHouse.jpg";
import bruselasLogo from "../../assets/images/BruselasLogo.png";

function Home() {
  return (
    <>
      <section className="logo-search-container">
        <div className="logo-container">
          <img src={bruselasLogo} alt="" />
        </div>
        <div className="serachBar-container">
          <Input
            css={"searchBar"}
            type={"text"}
            placeholder={"¿Que quieres aprender?"}
          />
        </div>
      </section>
      <section className="banner-container">
        <Card
          css={"general-card banner"}
          classImage={aztecaImagen}
          title={"Español 6° de primaria"}
        />
      </section>

      <section className="section-container">
        <h2>Continuar aprendiendo</h2>
        <div className="carousel-container">
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>

      <section className="section-container">
        <h2>Tus materias</h2>
        <div className="carousel-container">
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card video-card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>

      <section className="section-container">
        <h2>Frase del día</h2>
        <div className="carousel-container">
          <Card
            css={"general-card phrasecard"}
            classImage={kameHouse}
            title={"Siempre parece imposible hasta que se hace"}
          />
        </div>
      </section>

      <section className="section-container">
        <h2>Shorts</h2>
        <div className="carousel-container">
          <Card
            css={"general-card short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"general-card short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
