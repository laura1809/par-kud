
const ParkingCard = ({ info }) => {
  
  return (
    <>
          <div className="mx-8 my-2 p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 bg-red text-lg text-center font-semibold tracking-tight text-white rounded">Sucursal {info.name}</h5>
            <p className="mb-1 font-normal text-black"><span className="font-semibold">Tipo sucursal:</span> Cubierta </p>
            <p className="mb-1 font-normal text-black"><span className="font-semibold">Ciudad:</span> Bogotá D.C </p>
            <p className="mb-1 font-normal text-black "><span className="font-semibold">Dirección:</span> Carrera 7v # 78 -1 </p>
            <hr />
            <p className="mt-1 font-normal text-black"><span className="font-bold">Tarifas</span> </p>
            <p className="mb-1 font-normal text-black"><span className="font-semibold">SUV:</span> $112 minuto </p>
            <p className="mb-1 font-normal text-black"><span className="font-semibold">Automóvil:</span> $89 minuto  </p>
            <p className="mb-1 font-normal text-black "><span className="font-semibold">Moto:</span> No aplica</p>
          </div>
        
      
    </>
  )
}

export default ParkingCard