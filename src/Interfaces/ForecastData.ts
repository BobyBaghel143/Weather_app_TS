import CurrentDayForecast from "./CurrentDayForecast";
import DayForecast from "./DayForecast";
import TodayForecast from "./TodayForecast";

export default interface ForecastData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  dayForecast: DayForecast[];
  currentData: CurrentDayForecast;
  todayForecast: TodayForecast[];
  // hourForecast: HourForecast;
}
