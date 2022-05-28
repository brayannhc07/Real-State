import React, { useState } from 'react';
import { createRequestAsync } from '../Services/requestsService';

const PropertiesRequestDialog = props => {

  const { selectedProperty, refreshProperties } = props;
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const saveRequest = async () => {
    const request = {
      ...form,
      propertyId: selectedProperty.id,
      requestTime: new Date()
    };

    const res = await createRequestAsync(request);

    if (!res.ok) {
      console.log(res.message);
    }

    refreshProperties();

  };

  return (
    <div className="modal fade" tabIndex="-1" id="propertiesRequestDialog" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" tabIndex="-1">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Solicitar cita de venta</h4>
          </div>
          <div className="modal-body">
            <div className="row">
              <p className="">Envíanos tu solicitud para ponernos en contacto contigo y dar seguimiento a tu trámite.</p>
            </div>
            <div className="row mb-2">
              <div className="col-12 my-2">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={changeHandler}
                  name="name"
                  placeholder="Nombre completo" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={changeHandler}
                  name="email"
                  placeholder="Correo electrónico" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Teléfono de contacto</label>
                <input
                  type="tel"
                  className="form-control"
                  value={form.phone}
                  onChange={changeHandler}
                  name="phone"
                  placeholder="Teléfono de contacto" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Asunto</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.subject}
                  onChange={changeHandler}
                  name="subject"
                  placeholder="Asunto" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Mensaje</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.message}
                  onChange={changeHandler}
                  name="message"
                  placeholder="Mensaje" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className='btn btn-secondary'
              data-bs-dismiss="modal">
              Cancelar
            </button>
            <button
              type="button"
              className='btn btn-primary'
              data-bs-dismiss="modal"
              onClick={async () => await saveRequest()}>
              Enviar solicitud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesRequestDialog;
