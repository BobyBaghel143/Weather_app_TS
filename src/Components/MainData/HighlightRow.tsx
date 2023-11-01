import { useSelector } from "react-redux";
import HighlightCart from "./Carts/HighlightCards";
import ReduxState from "../../Interfaces/ReduxState";

function HighlightRow() {

  const currentData = useSelector((state:ReduxState) => state.forecast.data.currentData);

  function uvRange():string {
    if (currentData.uv < 5) return "Low";
    else if(currentData.uv >= 5 && currentData.uv <= 8) return "Moderate";
    else return "High"
  }


  function humidityRange(): string {
    if (currentData.humidity < 30) return "Low";
    else if (currentData.humidity >= 30 && currentData.humidity <= 50) return "Moderate";
    else return "High"
  }
  
  function visibilityRange() : string{
    if (currentData.vis_km < 1.6) return "Low";
    else if (currentData.vis_km >= 1.6 && currentData.vis_km <= 4.8) return "Moderate";
    else return "High";
  }

  function airQualityRange(): string{
    if (currentData.aqi < 1.6) return "Good";
    else if (currentData.aqi >= 1.6 && currentData.aqi <= 4.8) return "Moderate";
    else return "Unhealthy"
  }

  return (
    <div className="flex flex-wrap items-center justify-start w-full gap-4 px-12 py-2" >
      <HighlightCart title="UV Index" data={currentData.uv.toString()} footer={uvRange()} />
      <HighlightCart title="Wind Status" data={currentData.wind_kmph.toString()} footer="km/h" />
      <HighlightCart title="Humidity" data={currentData.humidity.toString() + "%"} footer={humidityRange()} />
      <HighlightCart title="Visibility" data={currentData.vis_km.toString() + " km/h"} footer={visibilityRange()} />
      <HighlightCart title="Sunrise & Sunset" data={currentData.sunrise}  footer={currentData.sunset} />
      <HighlightCart title="Air quality" data={currentData.aqi.toString()}  footer={airQualityRange()} />
  </div>
  );
}

export default HighlightRow;


