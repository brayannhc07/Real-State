// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faRefresh } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { getPropertiesAsync } from "../Services/propertiesService";
import { PropertyCard, LoadingSpinner, PropertiesSearchControls, PropertiesRequestDialog, PropertiesDialog } from "./";
import { sessionContext } from '../Context/sessionContext';
import PropertiesDeleteDialog from "./PropertiesDeleteDialog";

const PropertiesSearch = props => {

  const { isLogged } = useContext(sessionContext);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPriceInitial, setMinPriceInitial] = useState(0);
  const [maxPriceInitial, setMaxPriceInitial] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState({});

  const refreshProperties = async () => {
    setIsLoading(true);

    const res = await getPropertiesAsync();
    if (res.ok) {
      setProperties(res.data);
    } else {
      setProperties([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refreshProperties();
  }, []);

  useEffect(() => {
    if (properties.length > 0) {
      const minRange = Math.min(...properties.map(property => property.price));
      const maxRange = Math.max(...properties.map(property => property.price));
      setMinPriceInitial(minRange);
      setMaxPriceInitial(maxRange);
      setMinPrice(minRange);
      setMaxPrice(maxRange);
    } else {
      setMinPriceInitial(0);
      setMaxPriceInitial(0);
      setMinPrice(0);
      setMaxPrice(0);

    }
  }, [properties]);

  return (
    <Fragment>
      <div className="row my-2">
        <div className="col-12">
          <PropertiesSearchControls
            searchText={searchText}
            setSearchText={setSearchText}
            minPriceInitial={minPriceInitial}
            maxPriceInitial={maxPriceInitial}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice} />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 d-flex justify-content-end">
          {
            isLogged &&
            <button
              className="btn btn-primary mx-1"
              onClick={() => setSelectedProperty({})}
              data-bs-toggle="modal"
              data-bs-target="#propertiesDialog">
              Registrar Propiedad
            </button>
          }
        </div>
      </div>
      <div className="row justify-content-center my-2">
        {
          isLoading &&
          <LoadingSpinner />
        }
      </div>
      <div className="row my-2">
        {
          !isLoading &&
          properties
            .filter(property => property.status === 0
              && (property.name.toLowerCase().includes(searchText.toLowerCase().trim())
                || property.location.toLowerCase().includes(searchText.toLowerCase().trim()))
              && (minPrice !== 0 && maxPrice !== 0 && property.price >= minPrice && property.price <= maxPrice)
            )
            .map((property, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                  <PropertyCard
                    property={property}
                    setSelectedProperty={setSelectedProperty}
                  />
                </div>
              );
            })
        }
      </div>
      <PropertiesRequestDialog
        refreshProperties={refreshProperties}
        selectedProperty={selectedProperty} />
      <PropertiesDialog
        refreshProperties={refreshProperties}
        selectedProperty={selectedProperty}
        setSelectedProperty={setSelectedProperty} />
      <PropertiesDeleteDialog
        refreshProperties={refreshProperties}
        selectedProperty={selectedProperty} />
    </Fragment>
  );
}

export default PropertiesSearch;

