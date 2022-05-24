import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faToilet, faBed, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = props => {
  const { property, setSelectedProperty } = props;
  const { name, imageUrl, location, price, bathrooms, rooms, size } = property;

  return (
    <div className="card mb-3 w-100">
      <img src={imageUrl}
        alt=""
        className="card-img-top"
        style={{ width: '100%', objectFit: 'cover', aspectRatio: '16/9' }} />
      <div className="p-4 card-body">
        <h4 className="card-title">{location}</h4>
        <h6 className="card-subtitle mb-2 text-muted">
          <FontAwesomeIcon icon={faLocationDot} />
          <small> {name} </small>
        </h6>
        <p className="h3 text-primary my-2 d-block text-success">
          {price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex">
          <span className="me-auto">
            Habitaciones
          </span>
          <span className="fw-bold">
            {rooms} <FontAwesomeIcon icon={faBed} />
          </span>
        </li>
        <li className="list-group-item d-flex">
          <span className="me-auto">
            Baños
          </span>
          <span className="fw-bold">
            {bathrooms} <FontAwesomeIcon icon={faToilet} />
          </span>
        </li>
        <li className="list-group-item d-flex">
          <span className="me-auto">
            Tamaño
          </span>
          <span>
            {size.toLocaleString('es-MX')}
            m<sup>2</sup> <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </span>
        </li>
      </ul>
      <div className="card-body d-flex align-items-end">
        <button
          className="btn btn-primary w-100"
          data-bs-toggle="modal"
          data-bs-target="#propertiesRequestDialog"
          onClick={_ => setSelectedProperty(property)}>
          Agendar cita
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
