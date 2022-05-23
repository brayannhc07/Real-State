// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faRefresh } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { getPropertiesAsync } from "../Services/propertiesService";
import { PropertyCard, LoadingSpinner } from "./";
import { sessionContext } from '../Context/sessionContext';
import PropertiesSearchControls from "./PropiertiesSearchControls";
// import SubjectDialog from "./SubjectDialog";
// import { scheduleContext } from "../context/scheduleContext";

const PropertiesSearch = props => {

  const { isLogged } = useContext(sessionContext);
  // const { subjects, setSubjects } = useContext(scheduleContext);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [minPriceInitial, setMinPriceInitial] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [maxPriceInitial, setMaxPriceInitial] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  const refreshProperties = async () => {
    setIsLoading(true);

    const res = await getPropertiesAsync();
    if (res.ok) {
      setProperties(res.data);
    } else {
      setProperties([]);
    }
    setIsLoading(false);
    setMinPriceInitial(Math.min(...properties.map(property => property.price)) ?? 0);
    setMaxPriceInitial(Math.max(...properties.map(property => property.price)) ?? 0);
    setMinPrice(minPriceInitial);
    setMaxPrice(maxPriceInitial);
    setLocations(properties.map(property => property.location) ?? []);

  };

  useEffect(() => {
    refreshProperties();
  }, []);

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
            setMaxPrice={setMaxPrice}
            locations={locations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation} />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 d-flex justify-content-end">
          {
            isLogged &&
            <React.Fragment>
              <button
                className="btn btn-secondary mx-1"
                onClick={async () => await refreshProperties()}>
                Recargar
              </button>
              <button
                className="btn btn-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target="#subjectDialog">
                Abrir Modal
              </button>
            </React.Fragment>
          }
        </div>
      </div>
      <div className="row justify-content-center my-2">
        {
          isLoading &&
          <LoadingSpinner />
        }
      </div>
      <div className="row my2">
        {
          properties
            .filter(property => property.status === 0
              && (property.name.toLowerCase().includes(searchText.toLowerCase().trim())
                || property.location.toLowerCase().includes(searchText.toLowerCase().trim()))
              && property.price <= maxPrice && property.price >= minPrice
            )
            .map((property) => {
              return (
                <div key={property.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                  <PropertyCard
                    property={property}
                  />
                </div>
              );
            })
        }
      </div>
      { /* <SubjectDialog subject={selectedSubject} /> */}
    </Fragment>
  );
}

export default PropertiesSearch;

