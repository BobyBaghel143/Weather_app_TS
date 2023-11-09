import Lowerhalf from "./Lowerhalf";
import Upperhalf from "./Upperhalf";

type PropsCity = {
  setCity: React.Dispatch<string>
}

function Sidebar({setCity}:PropsCity) {
  return (
    <div className="overflow-y-auto  basis-3/12 flex flex-col items-center justify-center text-black rounded-tl-3xl rounded-bl-3xl"
      style={{ background: 'rgba(255,255,255,0.81)' }}
    >
      <Upperhalf setCity={setCity} />
      <div className="h-[1px] w-[87%] bg-[#e9ecef] mt-8 rounded-md " ></div>
      <Lowerhalf />
    </div>
  );
}

export default Sidebar;


