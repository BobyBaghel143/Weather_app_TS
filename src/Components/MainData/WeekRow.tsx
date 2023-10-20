import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";
import TempCart from "./Carts/TempCart";
import sun from '../../assets/sun.png'

function WeekRow() {

  const dayForcast = useSelector((state: ReduxState) => state.forecast.data.dayForecast);

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return (
    <div className="flex flex-wrap justify-start px-12 py-2  gap-6 w-full" >
      {dayForcast && dayForcast.map((forecast) => {
        return <TempCart title={weekdays[(new Date(forecast.date)).getDay()]} temp={forecast.avgtemp_c.toString()} image={sun}  />
     })}
    </div>
  );
}

export default WeekRow;
