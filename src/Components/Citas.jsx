import React from 'react'
import PropTypes from "prop-types";

const Citas = ({ cita, EliminarCita }) => (
  <div className="cita">
    <p>
      Mascotas: <span> {cita.Mascota} </span>
    </p>
    <p>
      Dueño: <span> {cita.propietario} </span>
    </p>
    <p>
      Fecha: <span> {cita.fecha} </span>
    </p>
    <p>
      Hora: <span> {cita.time} </span>
    </p>
    <p>
      Sintomas: <span> {cita.sintomas} </span>
    </p>

    <button 
        className="button eliminar d-block" 
        onClick={() => EliminarCita(cita.id)}
        >
      Eliminar &times;</button>
  </div>
);

Citas.prototype = {
  cita: PropTypes.object.isRequired,
  EliminarCita : PropTypes.func.isRequired
};
 
export default Citas;