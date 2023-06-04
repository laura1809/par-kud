import axios from "../../../services/axiosconfig";
import { useState } from "react";
import Step1Reservation from "./Step1Reservation";
import Step2Reservation from "./Step2Reservation";
import Step3Reservation from "./Step3Reservation";

const MakeReservation = () => {
  const [step3, setStep3] = useState(false);
  const [formReserva, setFormReserva] = useState({
    tipo_vehiculo_p: undefined,
    marca_placa_vehiculo_p: "",
    es_parq_cubierto_p: undefined,
    ciudad_p: undefined,
    nombre_sucursal_p: undefined,
    direccion_sucursal_p: "",
    fecha_reserva_p: "",
    hora_reserva_p: "",
    ultimos_cuatro_digitos_p: "",
    tipo_tarjeta_p: "",
    nombre_duenio_tarjeta_p: "",
    apellido_duenio_tarjeta_p: "",
    puntos_usados_p: 0,
    tarifa: "",
  });

  const handleFormChange = (e) => {
    setFormReserva({
      ...formReserva,
      [e.target.name]: e.target.value,
    });
  };

  const reservationPetition = () => {
    axios
      .post("/cliente/reservar", formReserva)
      .then((res) => {
        if (validarCVC()){
          alert("Reserva registrada");
          window.location.href = '/YourReservations';
        }else {
          alert("Hubo un error con tus datos");
        }
        
      })
      .catch((err) => console.log("error"));
  };

  const validarCVC = () => {
    let cvcRegex = /^[0-9]{3}$/;
    return cvcRegex.test(ultimos_cuatro_digitos_p);
  };

  const enableDiv = (id) => () => {
    if (id == "form3") {
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

    setFormReserva({
      tipo_vehiculo_p: undefined,
      marca_placa_vehiculo_p: "",
      es_parq_cubierto_p: undefined,
      ciudad_p: undefined,
      nombre_sucursal_p: undefined,
      direccion_sucursal_p: "",
      fecha_reserva_p: "",
      hora_reserva_p: "",
      ultimos_cuatro_digitos_p: "",
      tipo_tarjeta_p: "",
      nombre_duenio_tarjeta_p: "",
      apellido_duenio_tarjeta_p: "",
      puntos_usados_p: 0,
      tarifa: "",
    });
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
          setForm={setFormReserva}
          valid={step3}
          handleReservation={reservationPetition}
        />
      </div>
    </>
  );
};

export default MakeReservation;
