import React, { useState } from 'react';
import { createPropertyAsync } from '../Services/propertiesService';

const PropertiesDialog = props => {

  const { refreshProperties } = props;

  const [form, setForm] = useState({
    name: '',
    location: '',
    price: 0,
    rooms: 0,
    bathrooms: 0,
    size: 0,
    status: 0,
    imageUrl: ''
  });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const saveRequest = async () => {
    const res = await createPropertyAsync(form);

    if (!res.ok) {
      console.log(res.message);
    }

    refreshProperties();

  };

  return (
    <div className="modal fade" tabIndex="-1" id="propertiesDialog" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" tabIndex="-1">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Registrar propiedad</h4>
          </div>
          <div className="modal-body">
            <div className="row mb-2">
              <div className="col-12 my-2">
                <label className="form-label">Nombre de la propiedad</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={changeHandler}
                  name="name"
                  placeholder="Nombre de la propiedad" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Ubicación</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.location}
                  onChange={changeHandler}
                  name="location"
                  placeholder="Ubicación" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Costo</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.price}
                  onChange={changeHandler}
                  name="price"
                  placeholder="Costo" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Habitaciones</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.rooms}
                  onChange={changeHandler}
                  name="rooms"
                  placeholder="Habitaciones" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Baños</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.bathrooms}
                  onChange={changeHandler}
                  name="bathrooms"
                  placeholder="Baños" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Tamaño</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.size}
                  onChange={changeHandler}
                  name="size"
                  placeholder="Tamaño" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Enlace de la imagen</label>
                <input
                  type="url"
                  className="form-control"
                  value={form.imageUrl}
                  onChange={changeHandler}
                  name="imageUrl"
                  placeholder="Enlace de la imagen" />
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
              onClick={async _ => await saveRequest()}
              data-bs-dismiss="modal"
            >
              Registrar propiedad
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PropertiesDialog;
