import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Forms from "./Components/Forms";
import Citas from './Components/Citas'


// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  // LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = [];
  }

  // Array de citas
  const [citas, setCita] = useState(citasIniciales)


  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas, citasIniciales])
  


  const crearCita = cita =>{
    setCita([
      ...citas,
      cita
    ])
  }

  // Eliminar una cita por su id
  const EliminarCita = id =>{
    const nuevaCitas = citas.filter(cita => cita.id !== id);
    setCita(nuevaCitas);

  }

  // Mensaje condicional
  const titulo = citas.length ===0 ? "No hay citas" : "Administra tu citas"
  console.log(citas.length)

  return (
    <Fragment>
      <h1 className="text-center my-4">Administrador de pacientes </h1>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 px-5">
            <Forms crearCita={crearCita} />
          </div>

          <div className="col-12 col-md-6 ">
            <h3> {titulo} </h3>
            {citas.map((cita) => (
              <Citas key={cita.id} cita={cita} EliminarCita={EliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
