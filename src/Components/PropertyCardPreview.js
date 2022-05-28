import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faToilet, faBed, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const PropertyCardPreview = props => {
  const { property } = props;

  return (
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div className="col-12 col-md-4">
          <img src={property?.imageUrl}
            alt=""
            className="img-fluid rounded-start"
            style={{ objectFit: 'cover', aspectRatio: '16/9' }} />
        </div>
        <div className="col-12 col-md-8">

          <div className="p-4 card-body">
            <h4 className="card-title">{property?.location}</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              <FontAwesomeIcon icon={faLocationDot} />
              <small> {property?.name} </small>
            </h6>
            <p className="h3 text-primary my-2 d-block text-success">
              {property?.price?.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex">
              <span className="me-auto">
                Habitaciones
              </span>
              <span className="fw-bold">
                {property?.rooms ?? ''} <FontAwesomeIcon icon={faBed} />
              </span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-auto">
                Baños
              </span>
              <span className="fw-bold">
                {property?.bathrooms ?? ''} <FontAwesomeIcon icon={faToilet} />
              </span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-auto">
                Tamaño
              </span>
              <span>
                {property?.size?.toLocaleString('es-MX')}
                m<sup>2</sup> <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardPreview;

