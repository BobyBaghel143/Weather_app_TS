import TempCart from "./Carts/TempCart";
import Sun from "../../assets/sun.png";
import Rain from "../../assets/rain.png"

function WeekRow() {
  return (
    <div className="flex flex-wrap justify-start px-12 py-2  gap-6 w-full" >
      <TempCart title="Saturday" image={Sun} temp="25.5°C" />
      <TempCart title="Sunday" image={Rain} temp="27.4°C" />
      <TempCart title="Monday" image={Sun} temp="23.5°C" />
      <TempCart title="Tuesday" image={Rain} temp="29.5°C" />
      <TempCart title="Wednesday" image={Rain} temp="15.5°C" />
      <TempCart title="Thurshday" image={Sun} temp="35.5°C" />
      <TempCart title="Friday" image={Sun} temp="21.5°C" />
    </div>
  );
}

export default WeekRow;
