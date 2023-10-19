import { AiFillCloud } from "react-icons/ai";
import { BsFillCloudLightningFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function Lowerhalf() {
 
  const currentData = useSelector((state:ReduxState)=>state.forecast.data.currentData)
   
  return (
    <div className=" h-[40%] w-full p-4 flex flex-col justify-between">

      <div className="flex flex-col">

        <div className=" flex items-center gap-4 my-2 text-sm  ">
          <AiFillCloud />
          <p>{currentData.condition} </p>
        </div>

        <div className="flex  items-center gap-x-4  my-2 text-sm">
          <BsFillCloudLightningFill />
          <p>Perc - 10 %</p>
        </div>

      </div>

      <div className="flex gap-2 items-center">
        <div> <MdLocationPin /> </div>
        <div>Noida, Utter Pradesh</div>
      </div>

    </div>
  );
}

export default Lowerhalf;
