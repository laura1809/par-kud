import Step1Reservation from "./Step1Reservation";
import Step2Reservation from "./Step2Reservation";
import Step3Reservation from "./Step3Reservation";

const MakeReservation = () => {

  const enableDiv = (id) => () => {
    let div = document.getElementById(id);
    div.classList.remove("pointer-events-none");
    div.classList.remove("bg-gray-300");
    div.classList.remove("opacity-50");
  }

  const disableDiv = () =>  {
    let div2 = document.getElementById('form2');
    div2.classList.add("pointer-events-none");
    div2.classList.add("bg-gray-300");
    div2.classList.add("opacity-50");

    let div3 = document.getElementById('form3');
    div3.classList.add("pointer-events-none");
    div3.classList.add("bg-gray-300");
    div3.classList.add("opacity-50");
  }
  return (
    <>
      <div className="flex">
        <Step1Reservation enableDiv={enableDiv}/>
        <Step2Reservation enableDiv={enableDiv}/>
      </div>

      <div>
        <Step3Reservation disableDiv={disableDiv} />
      </div>
    </>
  )
}

export default MakeReservation