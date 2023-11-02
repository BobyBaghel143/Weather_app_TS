import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";
import TempCart from "./Carts/TempCart";




function HoursRow() {
    const todayForecast = useSelector((state: ReduxState) => state.forecast.data.todayForecast);
    const tempFormat = useSelector((state: ReduxState) => state.forecast.tempFormat);

    function getUTC12hr(forCastTime: string) {
        const time = new Date(forCastTime).toLocaleTimeString("en-US", {
            timeZone: "UTC",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
        });
        return time;
    }

    return (
        <div className="overflow-x-auto px-4 pt-2 pb-4 flex gap-5" >
            {todayForecast && todayForecast.map((forecast) => {
                const temp = tempFormat === "celsius" ?
                        Math.floor(forecast.temp_c).toString() + "°C" :
                        Math.floor(forecast.temp_f).toString() + "°F";
                return (
                    <TempCart
                        key={forecast.time}
                        condition={forecast.condition}
                        title={getUTC12hr(forecast.time)}
                        temp={temp}
                        image={forecast.image}
                    />
                )
            })}
        </div>
    );
}

export default HoursRow;