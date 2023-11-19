import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";
import TempCart from "./Carts/TempCart";

function WeekRow() {
  const dayForcast = useSelector((state: ReduxState) => state.forecast.data.dayForecast);
  const tempFormat = useSelector((state: ReduxState) => state.forecast.tempFormat);

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]


  return (
    <div className=" overflow-x-auto flex flex-wrap justify-start px-12 py-2 gap-6" >
      {dayForcast && dayForcast.map((forecast) => {
        const temp = tempFormat === "celsius" ?
        Math.floor(forecast.avgtemp_c).toString() + "°C" :
        Math.floor(forecast.avgtemp_f).toString() + "°F";
        return (
          <TempCart
            key={forecast.date}
            image={forecast.image}
            condition={forecast.condition}
            temp={temp}
            title={weekdays[(new Date(forecast.date)).getDay()]}
          />
        )
      })}
    </div>
  );
}

export default WeekRow;


