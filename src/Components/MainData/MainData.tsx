import { useState } from 'react';
import HighlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";
import HoursRow from './HoursRow';

function MainData() {

  const [todayWeekToggle, setTodayWeekToggle] = useState<boolean>(true);

  return (
    <div className="overflow-y-auto basis-9/12 flex flex-col justify-start items-center py-4  text-black  bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl">
      <TopRow setTodayWeekToggle={setTodayWeekToggle} />
      <div className='w-full h-full px-4' > {todayWeekToggle ? <HoursRow /> : <WeekRow />} </div>
      <div className="text-2xl font-semibold my-5 text-left w-full px-12 py-2 tracking-wider ">
        Today's Highlights
      </div>
      <HighlightRow />
    </div>
  );
}

export default MainData;

