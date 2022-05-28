import React from 'react';
import { createPropertyAsync, updatePropertyAsync } from '../Services/propertiesService';

const PropertiesDialog = props => {

  const { selectedProperty, setSelectedProperty, refreshProperties } = props;
  const isNew = Object.keys(selectedProperty).length = 0;

  const changeHandler = e => {
    setSelectedProperty({ ...selectedProperty, [e.target.name]: e.target.value });
  }

  const saveRequest = async () => {
    const { id, ...data } = selectedProperty;

    const res = isNew ? await createPropertyAsync(data) : await updatePropertyAsync(id, data);

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
                  value={selectedProperty.name ?? ''}
                  onChange={changeHandler}
                  name="name"
                  placeholder="Nombre de la propiedad" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Ubicación</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedProperty.location ?? ''}
                  onChange={changeHandler}
                  name="location"
                  placeholder="Ubicación" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Costo</label>
                <input
                  type="number"
                  className="form-control"
                  value={selectedProperty.price ?? ''}
                  onChange={changeHandler}
                  name="price"
                  placeholder="Costo" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Habitaciones</label>
                <input
                  type="number"
                  className="form-control"
                  value={selectedProperty.rooms ?? ''}
                  onChange={changeHandler}
                  name="rooms"
                  placeholder="Habitaciones" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Baños</label>
                <input
                  type="number"
                  className="form-control"
                  value={selectedProperty.bathrooms ?? ''}
                  onChange={changeHandler}
                  name="bathrooms"
                  placeholder="Baños" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Tamaño</label>
                <input
                  type="number"
                  className="form-control"
                  value={selectedProperty.size ?? ''}
                  onChange={changeHandler}
                  name="size"
                  placeholder="Tamaño" />
              </div>
              <div className="col-12 my-2">
                <label className="form-label">Enlace de la imagen</label>
                <input
                  type="url"
                  className="form-control"
                  value={selectedProperty.imageUrl ?? ''}
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
              {isNew ? "Registrar propiedad" : "Editar propiedad"}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PropertiesDialog;
