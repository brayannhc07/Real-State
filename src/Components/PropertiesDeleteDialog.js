import React from 'react';
import { deletePropertyAsync } from '../Services/propertiesService';

const PropertiesDeleteDialog = props => {

  const { selectedProperty, refreshProperties } = props;

  const deleteProperty = async () => {
    const res = await deletePropertyAsync(selectedProperty.id);

    if (!res.ok) {
      console.log(res.message);
    }

    refreshProperties();

  };

  return (
    <div className="modal fade" tabIndex="-1" id="propertiesDeleteDialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" tabIndex="-1">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Eliminar propiedad</h4>
          </div>
          <div className="modal-body">
            <p>¿Desea eliminar de forma permante esta propiedad?</p>
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
              onClick={async _ => await deleteProperty()}
              data-bs-dismiss="modal"
            >
              Eliminar propiedad
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PropertiesDeleteDialog;

