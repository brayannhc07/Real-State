import React, { Fragment, useContext, useState, useEffect } from 'react';
import { sessionContext } from '../Context/sessionContext';
import { LoadingSpinner } from './';
import { getRequestsAsync } from '../Services/requestsService';

const RequestsSearch = props => {
  const { isLogged } = useContext(sessionContext);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedProperty, setSelectedProperty] = useState({});


  const refreshProperties = async () => {
    setIsLoading(true);

    const res = await getRequestsAsync();
    if (res.ok) {
      setRequests(res.data);
    } else {
      setRequests([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refreshProperties();
  }, []);

  useEffect(() => {

  }, [requests]);
  return (
    <Fragment>
      <div className="row my-2">
        <div className="col-12">
          { /*          <PropertiesSearchControls
            searchText={searchText}
            setSearchText={setSearchText}
            minPriceInitial={minPriceInitial}
            maxPriceInitial={maxPriceInitial}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice} /> */}
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 d-flex justify-content-end">
          { /*
            <React.Fragment>
              <button
                className="btn btn-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target="#propertiesRequestDialog">
                Abrir Modal
              </button>
            </React.Fragment> */
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
          !isLoading &&
          requests
            .map((request) => {
              return (
                <div key={request.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                  <h1>{request.id}</h1>
                </div>
              );
            })
        }
      </div>
    </Fragment>
  );

};

export default RequestsSearch;
