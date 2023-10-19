import ForecastData from "./ForecastData";

export default interface ForecastDataState {
  status: "default" | "loading" | "succes" | "failure";
  data: ForecastData;
}
