import React from 'react';

const PropertiesSearchControls = props => {

  const { searchText, setSearchText,
    minPriceInitial, maxPriceInitial,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice
  } = props;

  return (
    <div className="card">
      <div className="card-body row">
        <h3 className="card-title">Buscar y filtrar</h3>
        <div className="col-12">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Buscar lugar o propiedad"
            value={searchText}
            onChange={e => setSearchText(e.target.value)} />
        </div>
        <div className="col-12 col-md-6">
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
        </div>
        <div className="col-12 col-md-6">
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
      </div>
    </div>
  );
};

export default PropertiesSearchControls;
