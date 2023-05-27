import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

const MySwal = withReactContent(Swal)

const RegisterCard = () => {

  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');

  const handlePrimerNombreChange = (event) => {
    setPrimerNombre(event.target.value);
  };

  const handleSegundoNombreChange = (event) => {
    setSegundoNombre(event.target.value);
  };

  const handlePrimerApellidoChange = (event) => {
    setPrimerApellido(event.target.value);
  };

  const handleSegundoApellidoChange = (event) => {
    setSegundoApellido(event.target.value);
  };

  const handleTarjetaChange = (event) => {
    setTarjeta(event.target.value);
  };

  const handleMesChange = (event) => {
    setMes(event.target.value);
  };

  const handleAnioChange = (event) => {
    setAnio(event.target.value);
  };

  const onSubmit = () => {

    if(primerNombre.length > 0 && 
      primerApellido.length > 0 && 
      segundoApellido.length > 0 && 
      tarjeta.length > 0 && 
      mes.length > 0 && 
      anio.length > 0
      ){

        const objectData = {
            firstName: primerNombre,
            secondName: segundoNombre,
            firstSurname : primerApellido,
            secondSurname: segundoApellido,
            card: tarjeta,
            month: mes,
            year: anio
        }

        console.log(objectData)

        axios.post('/api/posts', objectData)
        .then(response => {
          console.log(response.data);
          MySwal.fire({
            title: <strong>Listo</strong>,
            html: <i>Tarjeta Registrada</i>,
            icon: 'success'
          })
          // Realizar cualquier otra acción con la respuesta del servidor
        })
        .catch(error => {
          console.error(error);
          MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>Registro No Completado</i>,
            icon: 'error'
          })
          // Manejar cualquier error que ocurra durante la petición
        });
    
    }else{
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Debe rellenar todos lo campos</i>,
        icon: 'error'
      })
    }

  }

  return (
    <>
    <div className=" bg-gray-100 flex flex-col justify-center">
      <div className="abosulte t-0 py-2 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Registra tu tarjeta</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Completa los siguientes campos con los datos del titular.</p>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Primer nombre</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input 
                        type="text" 
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        placeholder="Primer nombre"
                        value={primerNombre}
                        onChange={handlePrimerNombreChange} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Segundo nombre</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input 
                        type="text" 
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        placeholder="Segundo nombre"
                        value={segundoNombre}
                        onChange={handleSegundoNombreChange} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Primer apellido</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input 
                        type="text" 
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        placeholder="Primer apellido" 
                        value={primerApellido}
                        onChange={handlePrimerApellidoChange}/>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Segundo apellido</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input 
                        type="text" 
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        placeholder="Segundo apellido"
                        value={segundoApellido}
                        onChange={handleSegundoApellidoChange} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Numero de tarjeta</label>
                  <input 
                    type="number" 
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                    placeholder="Numero de la tarjeta"
                    value={tarjeta}
                    onChange={handleTarjetaChange} />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Mes de vencimiento</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input 
                        type="number" 
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        placeholder="00" 
                        value={mes}
                        onChange={handleMesChange}/>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Año de vencimiento</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input 
                        type="number" 
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        placeholder="0000"
                        value={anio}
                        onChange={handleAnioChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar
                </button>
                <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md " onClick={onSubmit}>Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default RegisterCard