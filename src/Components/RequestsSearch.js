import React, { Fragment, useState, useEffect } from 'react';
import { LoadingSpinner } from './';
import { getRequestsAsync } from '../Services/requestsService';
import RequestCard from './RequestCard';
import RequestManageDialog from './RequestManageDialog';

const RequestsSearch = props => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);


  const tabs = [
    "Pendientes",
    "Aprobados",
    "Rechazados"
  ];

  const refreshRequests = async () => {
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
    refreshRequests();
  }, []);

  return (
    <Fragment>
      <div className="row my-4">
        <div className="col-12">
          <ul className="nav nav-tabs">
            {
              tabs.map((tab, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <button
                      className={`nav-link ${index === selectedTab ? 'active' : ''}`}
                      onClick={() => setSelectedTab(index)} >
                      {tab}
                    </button>
                  </li>
                );
              })
            }
          </ul>
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
          requests.filter(request => request.status === selectedTab)
            .sort(request => request.requestTime)
            .map((request, index) => {
              return (
                <div key={index} className="col-12 col-md-6 d-flex align-items-stretch mb-2">
                  <RequestCard
                    setSelectedRequest={setSelectedRequest}
                    request={request} />
                </div>
              );
            })
        }
      </div>
      <RequestManageDialog
        selectedRequest={selectedRequest}
        refreshRequests={refreshRequests} />

    </Fragment>
  );

};

export default RequestsSearch;
