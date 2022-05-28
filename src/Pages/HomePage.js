import { Fragment } from "react";
import { Gallery, Header } from "../Components";
import { AboutMore, AboutIntro, AboutShort } from "../Articles/About";
// import { ContactDemo, HomeMainArticle } from '../Articles';

const HomePage = (props) => {
  return (
    <Fragment>
      <Header backgroundImage="assets/images/common/header-cover.jpg">
        <h1>
          Invierte inteligente, invierte en tu futuro.
        </h1>
        <p className="h4">
          Invierte en materia de propiedades, conoce nuestros planes financieros y casas.
        </p>
      </Header>
      <main className="section container-fluid">
        {/* <HomeMainArticle /> */}
        <AboutIntro />
        <AboutMore />
        <Gallery />
        <AboutShort />
      </main>
    </Fragment>
  );
};

export default HomePage;
