import "./Home.css";
import { Card } from "../../components/Card";
import aztecaImagen from "../../assets/images/aztecaImagen.jpg";

function Home() {
  return (
    <>
      <section className="banner-container">
        <Card
          css={"banner"}
          classImage={aztecaImagen}
          title={"Español 6° de primaria"}
        />
      </section>

      <section className="section-container">
        <h2>Continuar aprendiendo</h2>
        <div className="carousel-container">
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>

      <section className="section-container">
        <h2>Tus materias</h2>
        <div className="carousel-container">
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"card"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>

      <section className="section-container">
        <h2>Frase del día</h2>
        <div className="carousel-container">
          <Card
            css={"phrasecard"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>

      <section className="section-container">
        <h2>Shorts</h2>
        <div className="carousel-container">
          <Card
            css={"short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
          <Card
            css={"short"}
            classImage={aztecaImagen}
            title={"Español 6° de primaria"}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
