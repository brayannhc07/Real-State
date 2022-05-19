import React from 'react';

const PropertyCard = props => {
  const { bathrooms, id, imageUrl, location, price, rooms, size } = props.property;

  return (
    <div className="card mb-3 w-100">
      <img src={ imageUrl }
        alt="" 
        className="card-img-top" />
      <div className="p-4 card-body">
        <h4 className="card-title">{ location }</h4>
        <h5 className="card-subtitle mb-2 text-muted">{ id }</h5>
        <p className="property-price text-primary mb-3 d-block text-success">
          { price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) }
        </p>

        <button className="btn btn-primary">Agendar cita</button>

        <ul className="property-specs-wrap mb-3 mb-lg-0">
          <li>
           <span className="property-specs">Beds</span>
           <span className="property-specs-number">{ rooms } <sup>+</sup></span>
                   
          </li>
          <li>
           <span className="property-specs">Baths</span>
           <span className="property-specs-number">{ bathrooms }</span>
                   
          </li>
           <li>
             <span className="property-specs">SQ FT</span>
             <span className="property-specs-number">{ size }</span>
                   
             </li>
         </ul>

        </div>
    </div>
  );
};

export default PropertyCard;
