const RegisterVehicles = () => {
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center">
        <div className="abosulte t-0 py-2 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Registra tu vehículo</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">Completa los siguientes campos.</p>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Primer nombre</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Primer nombre" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Segundo nombre</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Segundo nombre" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Primer apellido</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Primer apellido" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Segundo apellido</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Segundo apellido" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Tipo de vehículo</label>
                    <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                      <option value="Automovil" selected>Automóvil</option>
                      <option value="Moto" >Moto</option>
                      <option value="SUV">SUV</option>
                    </select>

                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Placa</label>
                    <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Placa" />
                  </div>

                  <div class="flex flex-col">
                    <label class="leading-loose">Marca</label>
                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Marca" />
                  </div>
                </div>
                <div class="pt-4 flex items-center space-x-4">
                  <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar
                  </button>
                  <button class="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">Registrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterVehicles