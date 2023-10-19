import HighlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData() {
  return (
    <div className="overflow-y-auto basis-9/12 flex flex-col justify-start items-center py-4  text-black  bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl">
      <TopRow />
      <WeekRow />
      <div className="text-2xl font-semibold mt-8 text-left w-full px-12 py-2 ">
        Today's Highlights
      </div>
      <HighlightRow />
    </div>
  );
}

export default MainData;
