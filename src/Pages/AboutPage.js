import { Fragment } from "react";
import { AboutMain } from "../Articles/About";

const AboutPage = (props) => {
  return (
    <Fragment>
      <main className="section container mid-container">
        <AboutMain />
      </main>
    </Fragment>
  );
};

export default AboutPage;
