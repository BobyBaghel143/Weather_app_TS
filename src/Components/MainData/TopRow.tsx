import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Hooks/hooks";
import { toggleTempFormat } from "../../Redux/Slices/ForcastSlice";
import ReduxState from "../../Interfaces/ReduxState";

type Toggle = {
  setTodayWeekToggle: React.Dispatch<boolean>
}

function TopRow({setTodayWeekToggle}: Toggle) {
  const tempFormat = useSelector((state: ReduxState) => state.forecast.tempFormat);
  const dispatch = useAppDispatch();

  function handleTempFormat(temp: string) {
    dispatch(toggleTempFormat(temp));
  }

  return (
    <div className="flex items-center justify-between mt-5 w-full px-12 py-2 ">
      <div className="flex items-center justify-center text-xl font-semibold">
        <div className="mr-4 cursor-pointer " onClick={() => setTodayWeekToggle(true)}> Today </div>
        <div className="ml-4 cursor-pointer" onClick={() => setTodayWeekToggle(false)} > Week </div>
      </div>
      <div className="flex items-center justify-center font-semibold">
        <div className={`mr-8 border bg-black text-white px-[12px] py-2 rounded-[100%] 
          ${tempFormat == "celsius"
                ? "bg-[black] text-white"
                : "bg-white text-[#2d2d2d]"
            } text-white px-[14px] py-3 `}
          onClick={() => handleTempFormat("celsius")}
        > °C </div>
        <div className={`mr-8 border bg-white text-black px-[12px] py-2 rounded-[100%] 
          ${tempFormat == "fahrenheit"
              ? "bg-[black] text-white"
              : "bg-white text-[#2d2d2d]"
          } text-white px-[14px] py-3`}
          onClick={() => handleTempFormat("fahrenheit")}
        > °F </div>
      </div>
    </div>
  );
}

export default TopRow;
