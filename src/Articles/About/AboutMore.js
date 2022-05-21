import React from 'react';

const AboutMore = props => {
  return (
    <section className="row py-4">
      <div className="col-12 my-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mb-2">
              <h3>Juriquilla, Querétaro</h3>
              <p class="text-muted">Zona de calma y tranqulidad para tu familia...</p>
              <img src="assets/images/articles/about/about-more-01.jpg" className="img-fluid rounded" alt="" />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <h3>Misión Anitigua</h3>
              <p className="text-muted">Residencial lleno de elegancia y libertad</p>
              <img src="assets/images/articles/about/about-more-02.jpg" className="img-fluid rounded" alt="" />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <h3>Más sobre Nosotros</h3>
              <p className="">
                En 19 años de trayectoria nos hemos distinguido por otorgar un servicio de la más alta calidad, durante este tiempo hemos comercializado importantes desarrollos dentro de la Zona Metropolitana de Guadalajara y algunos desarrollos turísticos del país.
              </p>
              <p>
                Sierra Plus ofrece asesoría inmobiliaria de manera integral y versátil a todos sus clientes a través de un equipo altamente experimentado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
