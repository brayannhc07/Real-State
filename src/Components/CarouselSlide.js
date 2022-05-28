import React from 'react';

const CarouselSlide = (props) => {
  const { id, images } = props;
  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((_, index) => {
          return (
            <button
              key={index}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {images.map((value, index) => {
          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img src={value} className="d-block w-100 rounded" alt="" />
            </div>
          );
        })}
      </div>
      <button
        data-bs-target={`#${id}`}
        type="button"
        className="carousel-control-prev"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Back</span>
      </button>
      <button
        data-bs-target={`#${id}`}
        type="button"
        className="carousel-control-next"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSlide;

