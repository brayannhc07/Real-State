import React from 'react';

const RequestCard = props => {

  const { request, setSelectedRequest } = props;
  const statusTypes = [
    "Pendiente",
    "Aprobado",
    "Rechazados"
  ];

  return (
    <div className="card w-100">
      <div className="card-header">
        {statusTypes[request.status]}
      </div>
      <div className="card-body">
        <h5 className="card-title">{request.subject}</h5>
        <h6 className="card-subtitle mb-1 text-muted">
          {(new Date(request.requestTime).toLocaleDateString("es-MX", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}
        </h6>
        <p className="card-text">{request.name}</p>
        <button
          data-bs-toggle="modal"
          data-bs-target="#requestManageDialog"
          className="btn btn-primary"
          onClick={() => setSelectedRequest(request)}>
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
