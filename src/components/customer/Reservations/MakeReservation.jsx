import axios from "../../../services/axiosconfig";
import { useState } from "react";
import Step1Reservation from "./Step1Reservation";
import Step2Reservation from "./Step2Reservation";
import Step3Reservation from "./Step3Reservation";

const MakeReservation = () => {

  const [step3, setStep3] = useState(false);
  const [formReserva, setFormReserva] = useState({
    tipo_vehiculo: undefined,
    info_vehiculo: "",
    es_cubierto: undefined,
    nombre_ciudad: undefined,
    nombre_sucursal: undefined,
    direccion_sucursal: "",
    fecha_reserva: "",
    hora_reserva: "",
    puntos_usados: undefined,
    ultimos_cuatro_digitos: 0,
    tipo_tarjeta: "",
    nombre_duenio_tarjeta: "",
    apellido_duenio_tarjeta: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormReserva((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  
  const validarCVC = () => {
    let cvcRegex = /^[0-9]{3}$/;
    return cvcRegex.test(ultimos_cuatro_digitos);
  };

  const enableDiv = (id) => () => {
    if(id=='form3'){
        setStep3(true);
    }
    let div = document.getElementById(id);
    div.classList.remove("pointer-events-none");
    div.classList.remove("bg-gray-300");
    div.classList.remove("opacity-50");
  };

  const disableDiv = () => {
    let div2 = document.getElementById("form2");
    div2.classList.add("pointer-events-none");
    div2.classList.add("bg-gray-300");
    div2.classList.add("opacity-50");

    let div3 = document.getElementById("form3");
    div3.classList.add("pointer-events-none");
    div3.classList.add("bg-gray-300");
    div3.classList.add("opacity-50");
  };

  return (
    <>
      <div className="flex">
        <Step1Reservation
          enableDiv={enableDiv}
          formData={formReserva}
          onFormChange={handleFormChange}
        />
        <Step2Reservation
          enableDiv={enableDiv}
          formData={formReserva}
          onFormChange={handleFormChange}

        />
      </div>
      <div>
        <Step3Reservation
          disableDiv={disableDiv}
          formData={formReserva}
          onFormChange={handleFormChange}
          valid={step3}
        />
      </div>
    </>
  );
};

export default MakeReservation;
