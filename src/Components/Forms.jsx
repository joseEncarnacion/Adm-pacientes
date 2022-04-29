import React, { Fragment } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types'

const Forms = ({ crearCita }) => {
  const [cita, setcita] = useState({
    id: "",
    Mascota: "",
    propietario: "",
    fecha: "",
    time: "",
    sintomas: "",
  });

  const handelEscribirInput = (e) => {
    setcita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const [error, seterror] = useState(false);

  const { Mascota, propietario, fecha, time, sintomas } = cita;

  const sumitCita = (e) => {
    e.preventDefault();

    // validar
    if (
      Mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      time.trim() === "" ||
      sintomas.trim() === ""
    ) {
      seterror(true);
      return;
    }

    // Eliminar mensaje previo
    seterror(false);

    // asignar un ID
    cita.id = uuidv4();

    // crear la cita
    crearCita(cita);

    // reiniciar el form

    setcita({
      id: "",
      Mascota: "",
      propietario: "",
      fecha: "",
      time: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h3>Crear cita</h3>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={sumitCita}>
        <label className="">Nombre Mascota</label>
        <input
          type="text"
          className="form-control my-2"
          name="Mascota"
          placeholder="Nombre Mascota"
          onChange={handelEscribirInput}
          value={Mascota}
        />

        <label className="pt-2">Nombre Dueño</label>
        <input
          type="text"
          className="form-control my-2"
          name="propietario"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handelEscribirInput}
          value={propietario}
        />

        <label className="pt-2">Fecha</label>
        <input
          type="date"
          className="form-control my-2"
          name="fecha"
          onChange={handelEscribirInput}
          value={fecha}
        />

        <label className="pt-2">Hora</label>
        <input
          type="time"
          className="form-control my-2"
          name="time"
          onChange={handelEscribirInput}
          value={time}
        />

        <label className="pt-2">Sintomas</label>
        <textarea
          name="sintomas"
          className="form-control  my-2"
          placeholder="Sintomas"
          onChange={handelEscribirInput}
          value={sintomas}
        />

        <input
          className="btn btn-primary btn-md my-4"
          type="submit"
          value="Enviar Datos"
        />
      </form>
    </Fragment>
  );
};

Forms.prototype ={
    crearCita: PropTypes.func.isRequired
}

// Forms.PropTypes = {
// //   crearCita: PropTypes.func.isRequired
// };

export default Forms;
