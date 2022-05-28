import React from 'react';
import styled from 'styled-components';

const AboutShort = props => {
  return (
    <SectionContainer className="row text-white p-4 text-center">
      <div className="col-12">
        <div className="container container-mid">
          <div className="row">
            <div className="col-12 my-4">
              <h2 className="my-4">Acerca de</h2>
              <p className="lead my-4">Por más de 35 años dentro del mercado inmobiliario, con más de 500 casos de éxito en encontrar la casa perfecta para tus necesidades, experiencia comprobable en negociaciones dentro del rubro.
              </p>
            </div>
          </div>
        </div>
      </div>

    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(assets/images/articles/about/about-short-01.jpg);
  background-position: 50% 0%; 
  object-fit: cover;
  display: block;
  vertical-align: middle;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 90px;
`;

export default AboutShort;
