import { CiSearch } from "react-icons/ci";

function Sidebar() {
  return (
    <div
      className="basis-3/12 flex flex-col items-center text-black h-full rounded-tl-3xl rounded-bl-3xl  "
      style={{ background: `rgba(255,255,255,0.81)` }}
    >
      Sidebar
      <div className="flex flex-row justify-center items-center  ">
        <input className="bg-[#f6f6f8] rounded-md " />
        <CiSearch className=" bg-blue-500  " />
      </div>
    </div>
  );
}

export default Sidebar;
