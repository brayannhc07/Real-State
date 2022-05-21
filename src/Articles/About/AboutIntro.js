import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutIntro = props => {
  return (
    <SectionContainer className="row p-4 text-white">
      <div className="col-12 my-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 p-4">
              <h3>Conoce de cerca nuestro trabajo</h3>
              <p className="lead">
                En la actualidad, el mercado inmobiliario es sinónimo de nuevos retos. Este mercado inmobiliario tiene sus propias reglas, en las que el profesional inmobiliario no puede ser improvisado, sino un agente de cambio en constante actualización.
              </p>
              <p className="lead">
                No quedan dudas que las personas capacitadas y preparadas que están atentas a estrechar relaciones duraderas con el cliente son las que mejor desempeñan su papel frente a una venta de un inmueble.
              </p>
              <Link className="btn btn-outline-light" to="/propiedades">Conoce nuestras propiedades</Link>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid rounded" alt="" src="assets/images/articles/about/about-intro-01.jpg" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-color: #a81c1d
`;

export default AboutIntro;
