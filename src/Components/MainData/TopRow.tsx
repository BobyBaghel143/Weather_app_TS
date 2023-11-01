function TopRow() {
  return (
      <div className="flex items-center justify-between mt-5 w-full px-12 py-2 ">
        <div className="flex items-center justify-center text-xl font-semibold">
          <div className="mr-4 ">Today</div>
          <div className="text-primary ml-4 ">Week</div>
        </div>
        <div className="flex items-center justify-center font-semibold">
          <div className="mr-8 border bg-black text-white px-[12px] py-2 rounded-[100%]"> °C </div>
          <div className="mr-8 border bg-white text-black px-[12px] py-2 rounded-[100%]">°F</div>
        </div>
      </div>
  );
}

export default TopRow;


