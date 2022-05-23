import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const PropertiesSearchControls = props => {

  const { searchText, setSearchText,
    minPriceInitial, maxPriceInitial,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice,
    locations, selectedLocation, setSelectedLocation
  } = props;

  return (
    <div className="row">
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar lugar o propiedad"
          value={searchText}
          onChange={e => setSearchText(e.target.value)} />
      </div>
      <div className="col-12 text-end my-2">
        <button className="btn btn-secondary btn-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSearchFilters"
          aria-expanded="false"
          aria-controls="collapseSearchFilters">
          Filtrar Propiedades <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
      <div className="collapse col-12" id="collapseSearchFilters">
        <div className="card card-body">
          <label
            htmlFor="minPriceRange"
            className="form-label">
            Precio mínimo: {minPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
          </label>
          <input
            type="range"
            className="form-range"
            min={minPriceInitial}
            max={maxPriceInitial}
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            id="minPriceRange" />
          <label
            htmlFor="maxPriceRange"
            className="form-label">
            Precio máximo: {maxPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
          </label>
          <input
            type="range"
            className="form-range"
            min={minPriceInitial}
            max={maxPriceInitial}
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            id="maxPriceRange" />

        </div>
        <div className="col-12">
          <select class="form-select">
            {
              locations.map((location, index) => {
                return (
                  <option key={index}>{location}</option>
                );
              })
            }
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertiesSearchControls;
