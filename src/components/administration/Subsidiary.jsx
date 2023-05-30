import { useNavigate } from "react-router-dom"

const AdminParkingCard = () => {
    const navigate = useNavigate();

    const editDataComp = () => {
        navigate("/SignUp");
    }

    return (
      <>
      <h1 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center">Sucursal</h1>
            <div className="mx-6 my-2 p-5 bg-white border border-gray-200 rounded-lg shadow ">
              <h5 className="mb-2 bg-red text-lg text-center font-semibold tracking-tight text-white rounded">Cedritos</h5>
              <p className="mb-1 text-sm font-normal text-center text-black"><span className="font-semibold">Tipo sucursal:</span> Tipo Suc </p>
              <p className="mb-1 text-sm font-normal text-center text-black"><span className="font-semibold">Ciudad:</span> Bogotá </p>
              <p className="mb-1 text-sm font-normal text-center text-black "><span className="font-semibold">Dirección:</span> kr 153 19-20</p>
              <p className="mb-1 text-sm font-normal text-center text-black "><span className="font-semibold">Disponibilidad de cupos:</span> 2 </p>
              <hr />
              <p className="mt-1 text-sm font-normal text-center text-black"><span className="font-bold">Horarios</span> </p>
              <p className="mb-1 text-sm font-normal text-center text-black"><span className="font-semibold">Hora de apertura:</span> 7:00 a.m
                <button
                    className="bg-blue flex justify-center items-center text-white font-bold px-4 py-3 shadow rounded-md "
                    onClick={editDataComp}
                >Editar Hora Apertura</button>
              </p>
              <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Hora de cierre:</span> 10:00 p.m
                <button
                    className="bg-blue flex justify-center items-center  text-white font-bold px-4 py-3 shadow rounded-md "
                    onClick={editDataComp}
                >Editar Hora Cierre</button>
              </p>
              <hr />
              <p className="mt-1 text-sm font-normal text-black"><span className="font-bold">Tarifas</span> </p>
              
              <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">SUV:</span> 70 minuto 
                <button
                    className="bg-yellow flex justify-center items-center  text-black font-bold px-4 py-3 shadow rounded-md "
                    onClick={editDataComp}
                >Editar Tarifa SUV</button>
              </p>

              <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Automóvil:</span> 60 minuto
                <button
                    className="bg-yellow flex justify-center items-center  text-black font-bold px-4 py-3 shadow rounded-md "
                    onClick={editDataComp}
                >Editar Tarifa Automovil</button>
              </p>
              
              <p className="mb-1 text-sm font-normal text-black "><span className="font-semibold">Moto:</span> 40 minuto
                <button
                    className="bg-yellow flex justify-center items-center  text-black font-bold px-4 py-3 shadow rounded-md "
                    onClick={editDataComp}
                >Editar Tarifa Automovil</button>
              </p>
              <p className="mb-1 text-sm font-normal text-black "><span className="font-semibold">Incremento parq. cubiero:</span> 10 
              <button
                    className="bg-yellow flex justify-center items-center  text-black font-bold px-4 py-3 shadow rounded-md "
                    onClick={editDataComp}
                >Editar Tarifa Automovil</button>
              </p>
                         </div>  
        
      </>
    )
  }
  
  export default AdminParkingCard