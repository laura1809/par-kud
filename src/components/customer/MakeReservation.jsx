const MakeReservation = () => {

  const enableDiv=(id)=> {
    let div = document.getElementById(id);
    div.classList.remove("pointer-events-none");
    div.classList.remove("bg-gray-300");
    div.classList.remove("opacity-50");
  }
  return (
    <>
      <div className="flex">
        <div className=" bg-gray-100 flex flex-col justify-center w-1/2">
          <div className="abosulte t-0 py-2 sm:max-w-xl sm:mx-24">
            <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Elige tu vehículo</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Elige con qué vehículo deseas reservar.</p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex items-center space-x-5">
                      <div className="flex flex-col w-full">
                        <label className="leading-loose">Tipo de vehículo</label>
                        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          <option value="Automovil" selected>Automóvil</option>
                          <option value="Moto" >Moto</option>
                          <option value="SUV">SUV</option>
                        </select>
                      </div>


                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">Tus vehículos registrados</label>
                      <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                        <option value="Automovil" selected>Vehículo 1</option>
                        <option value="Moto" >Vehículo 2</option>
                        <option value="SUV">Vehículo 3</option>
                      </select>
                    </div>
                  </div>
                  <div class="pt-4 flex items-center space-x-4">
                    <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
                      <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Limpiar filtros
                    </button>
                    <button class="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md" onClick="enableDiv('form2')">Continuar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="form2" className="bg-gray-100 flex flex-col justify-center w-1/2 pointer-events-none bg-gray-300 opacity-50">
          <div className="abosulte t-0 py-2 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Escoge tu parqueadero (sucursal)</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Filtra la información para encontrar el parqueadero.</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col w-full">
                        <label className="leading-loose">Ciudad</label>
                        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          <option value="Automovil" selected>Ciudad 1</option>
                          <option value="Moto">Ciudad 2</option>
                          <option value="SUV">Ciudad 3</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-full">
                        <label className="leading-loose">Tipo sucursal</label>
                        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          <option value="Cubierta" selected>Cubierta</option>
                          <option value="Semicubierta">Semicubierta</option>
                          <option value="Descubierta">Descubierta</option>
                        </select>
                      </div>

                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col w-1/2">
                        <label className="leading-loose">Tipo de parqueadero</label>
                        <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Parquedero" disabled />
                      </div>
                      <div className="flex flex-col w-1/2">
                        <label className="leading-loose">Sucursal</label>
                        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          <option value="Cubierta" selected>Sucursal 1</option>
                          <option value="Semicubierta">Sucursal 2</option>
                          <option value="Descubierta">Sucursal 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="pt-4 flex items-center space-x-4">
                    <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
                      <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Limpiar filtros
                    </button>
                    <button class="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">Buscar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 bg-gray-100 w-full">
        <div className="w-full relative px-4 bg-trasnparent mx-8 border-black rounded-3xl sm:p-2 ">
          <div className="flex items-center">
            <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Reserva tu cupo</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">Filtra la información para encontrar el parqueadero.</p>
            </div>
          </div>
          <div className="mx-10 py-8 justify-around text-base text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex">
              <div className="flex flex-col mr-20">
                <label className="leading-loose font-bold ">Parqueadero</label>
                <p>Parqueadero A </p>
              </div>
              <div className="flex flex-col mx-3">
                <label className="leading-loose font-bold">Dirección</label>
                <p>Calle 45 A 3 72</p>
              </div>

              <div className="flex flex-col mx-3">
                <label className="leading-loose font-bold">Slot</label>
                <select className="bg-transparent px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                  <option value="Cubierta" selected>A1</option>
                  <option value="Semicubierta">A2</option>
                  <option value="Descubierta">A3</option>
                </select>
              </div>

              <div className="flex flex-col mx-3">
                <label className="leading-loose font-bold">Tarifa-minuto</label>
                <p>$120</p>
              </div>

              <div className="flex flex-col w-40 mx-3">
                <label className="leading-loose font-bold">Fecha reserva</label>
                <input className="bg-transparent" type="date" />
              </div>

              <div className="flex flex-col w-40 mx-3">
                <label className="leading-loose font-bold">Hora de entrada</label>
                <input className="bg-transparent" type="time" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center space-x-4 mx-auto mb-4 mt-0">
          <button class="flex justify-center items-center w-1/4 text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar
          </button>
          <button class="bg-yellow flex justify-center items-center w-1/4 text-black font-bold px-4 py-3 shadow rounded-md ">Reservar</button>
        </div>

      </div>

    </>
  )

}

export default MakeReservation