import React from 'react';
import { CarouselSlide } from '../../Components';

const AboutMain = props => {

  const carouselImages = [
    "assets/images/articles/about/about-main-slide-01.jpg",
    "assets/images/articles/about/about-main-slide-02.jpg",
    "assets/images/articles/about/about-main-slide-03.jpg",
  ];

  return (
    <article className="row my-3">
      <h1>Acerca de Nosotros</h1>
      <p className="lead">
        <i>Vía de Real Estate - Inmobiliaria</i> es una empresa joven especializada en la <strong>venta</strong> y <strong>alquiler</strong> de propiedades con alto potencial. Gestionamos la venta y alquiler desde viviendas residenciales, inmuebles comerciales y garajes hasta naves industriales y terrenos.
      </p>
      <h3>
        Misión
      </h3>
      <p>
        Brindar un servicio de <strong>asesoría inmobiliaria</strong> personalizada orientada a cumplir con las exigencias de nuestros clientes. Trabajamos con <i>ética profesional</i>, con <i>honestidad</i> y <i>discreción</i> en todas las etapas de la venta, compra o alquiler. Nos basamos en nuestra <strong>experiencia</strong> y <strong>capacitación</strong> en el sector.
      </p>
      <h3>
        Visión
      </h3>
      <p>
        Ser la <strong>mejor alternativa</strong> para quienes quieren la ayuda de un profesional inmobiliario, desde una relación cercana y resolutiva, ofreciendo las popuestas más innovadoras. Que nuestros clientes se sientan plenamente <strong>acompañados</strong> y <strong>asesorados</strong> durante todo el proceso de compra de una propiedad.
      </p>

      <h2>Encuéntranos en</h2>
      <p className="lead">
        Santiago de Queretaro, Queretaro
      </p>
      <p>
        Número de contacto: (442) 145 5263 <br />
        Correo electrónico: ventasrealestate@real.com
      </p>
      <div className="my-2">
        <iframe
          title="Ubicación Real State"
          className="rounded"
          style={{ width: '100%', height: '100%', minHeight: '300px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.4961609635607!2d-100.44663018507306!3d20.690067386182776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b1e614acbb7%3A0x1747623f5ff6662f!2sReal%20Inmobiliaria%20Queretaro!5e0!3m2!1ses-419!2smx!4v1652329345450!5m2!1ses-419!2smx" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="my-2">
        <CarouselSlide
          id="carouselAboutMainArticle"
          images={carouselImages} />
      </div>
    </article>
  );
};

export default AboutMain;
