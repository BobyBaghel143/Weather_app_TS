import { AiFillCloud } from "react-icons/ai";
import { BsFillCloudLightningFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function Lowerhalf() {
 
  const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData)
  const location = useSelector((state:ReduxState)=> state.forecast.data.location)
   
  return (
    <div className=" h-[40%] w-full p-4 flex flex-col justify-between">

      <div className="flex flex-col">

        <div className=" flex items-center gap-4 my-2 text-sm  ">
          <AiFillCloud />
          <p>{currentData.condition} </p>
        </div>

        <div className="flex  items-center gap-x-4  my-2 text-sm">
          <BsFillCloudLightningFill />
          <p>Perc - {currentData.chance_of_rain} </p>
        </div>

      </div>

      <div className="flex gap-2 items-center">
        <div> <MdLocationPin /> </div>
        <div> {location.name}, {location.region}, {location.country} </div>
      </div>

    </div>
  );
}

export default Lowerhalf;
