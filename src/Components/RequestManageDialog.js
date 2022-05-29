import React, { useEffect, useState, useContext } from 'react';
import { sessionContext } from '../Context/sessionContext';
import { approveRequestAsync, rejectRequestAsync } from '../Services/requestsService';
import { getPropertyAsync, occupyPropertyAsync } from '../Services/propertiesService';
import PropertyCardPreview from './PropertyCardPreview';
import LoadingSpinner from './LoadingSpinner';

const RequestManageDialog = props => {

  const { selectedRequest, refreshRequests } = props;
  const { userProfile } = useContext(sessionContext);
  const [property, setProperty] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const approve = selectedRequest.status === 1;


  const approveRequest = async () => {
    const user = {
      name: userProfile.fullName,
      email: userProfile.email,
      photoUrl: userProfile.photoUrl
    };

    const res = await approveRequestAsync(selectedRequest.id, user);
    const res2 = await occupyPropertyAsync(selectedRequest.propertyId)

    if (!res.ok) {
      console.log(res.message);
    }

    if (!res2.ok) {
      console.log(res.message);
    }


    refreshRequests();

  };

  const rejectRequest = async () => {
    const user = {
      name: userProfile.fullName,
      email: userProfile.email,
      photoUrl: userProfile.photoUrl
    };
    const res = await rejectRequestAsync(selectedRequest.id, user);
    const res2 = await occupyPropertyAsync(selectedRequest.propertyId)

    if (!res.ok) {
      console.log(res.message);
    }

    if (!res2.ok) {
      console.log(res.message);
    }

    refreshRequests();

  };

  const reloadPropertyCard = async (id) => {

    setIsLoading(true);

    const res = await getPropertyAsync(id);

    if (!res.ok) {
      console.log(res.message);
      setProperty({});
    } else {
      setProperty(res.data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (Object.keys(selectedRequest).length > 0) {
      reloadPropertyCard(selectedRequest.propertyId);
    }

  }, [selectedRequest]);

  return (
    <div className="modal fade" tabIndex="-1" id="requestManageDialog" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" tabIndex="-1">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Administrar solicitud</h4>
          </div>
          <div className="modal-body">
            <div className="row mb-2">
              {
                (selectedRequest.status === 1 || selectedRequest.status === 2) &&
                <div className="col-12">
                  <div className={`card ${approve ? 'border-success' : 'border-danger'} mb-3`}>
                    <div className={`card-body ${approve ? 'text-success' : 'text-danger'}`}>
                      <h5 className="card-title">{approve ? 'Solicitud Aprobada' : 'Solicitud Rechazada'}</h5>
                      <p className="card-text">
                        Usuario: {approve ? selectedRequest.approveUser.name : selectedRequest.rejectUser.name} <br />
                        Correo: {approve ? selectedRequest.approveUser.email : selectedRequest.rejectUser.email} <br />
                        Fecha y Hora: {(new Date(approve ? selectedRequest.approveTime : selectedRequest.rejectTime)).toLocaleString()} <br />
                      </p>
                    </div>
                  </div>
                </div>
              }

              <div className="col-12 my-2">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedRequest.name ?? ''}
                  readOnly={true}
                  name="name"
                  placeholder="Nombre completo" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  value={selectedRequest.email ?? ''}
                  readOnly={true}
                  name="email"
                  placeholder="Correo electrónico" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Teléfono de contacto</label>
                <input
                  type="tel"
                  className="form-control"
                  value={selectedRequest.phone ?? ''}
                  readOnly={true}
                  name="phone"
                  placeholder="Teléfono de contacto" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Asunto</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedRequest.subject ?? ''}
                  readOnly={true}
                  name="subject"
                  placeholder="Asunto" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Mensaje</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedRequest.message ?? ''}
                  readOnly={true}
                  name="message"
                  placeholder="Mensaje" />
              </div>
              {
                isLoading &&
                <div className="col-12 text-center">
                  <LoadingSpinner />
                </div>
              }
              {
                !isLoading && Object.keys(property).length > 0 &&
                (
                  <div className="col-12">
                    <PropertyCardPreview
                      property={property} />
                  </div>
                )
              }
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className='btn btn-secondary'
                data-bs-dismiss="modal">
                Cancelar
              </button>
              {
                selectedRequest.status === 0 &&
                <button
                  type="button"
                  className='btn btn-outline-danger'
                  onClick={async _ => await rejectRequest()}
                  data-bs-dismiss="modal"
                >
                  Rechazar solicitud
                </button>
              }
              {
                selectedRequest.status === 0 &&
                <button
                  type="button"
                  className='btn btn-primary'
                  onClick={async _ => await approveRequest()}
                  data-bs-dismiss="modal"
                >
                  Aprobar solicitud
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestManageDialog;


