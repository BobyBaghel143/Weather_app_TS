import {CiSearch} from "react-icons/ci"
import CloudImage from "../../assets/cloud2.png"
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";



function Upperhalf() {

  const currentData = useSelector((state:ReduxState)=>state.forecast.data.currentData)

  return (
    <div className="max-h-[30rem] w-full p-4 flex flex-col  justify-center itemx-start basis-[65%] " >
      <div className="flex flex-start  w-full mt-8">
        <input
          className="px-2 py-2 rounded-tl-md rounded-bl-md basis-[90%] bg-white text-black "
          type="text"
          placeholder="Searching..."
        />
        <button className=" basis-[10%] block p-4 text-white text-lg font-semibold bg-sky-500 rounded-tr-md rounded-br-md">
          <CiSearch />
        </button>
      </div>

      <div className=" w-full h-[60%] flex justify-center mt-12">
        <img
          src={CloudImage}
          className="w-[60%] h-full"
        />
      </div>

      <div className="flex flex-col items-start mt-4" >
        <div className="text-7xl flex  items-start text-black ">
          <div>{currentData.temp_c} </div>
          <div className="text-4xl mt-1">°C</div>
        </div>
        <div className="text-md text-black">Wednesday , 10:08</div>
      </div>
   
    </div>
  );
}

export default Upperhalf;




