
const Step3Reservation = ({disableDiv}) => {
  return (
    <div id="form3" className="mx-2 bg-gray-100 w-full pointer-events-none bg-gray-300 opacity-50">
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
          <button class="flex justify-center items-center w-1/4 text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white" onClick={disableDiv}>
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar
          </button>
          <button class="bg-yellow flex justify-center items-center w-1/4 text-black font-bold px-4 py-3 shadow rounded-md ">Reservar</button>
        </div>

      </div>
  )
}

export default Step3Reservation