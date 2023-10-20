import { useSelector } from "react-redux";
import HighlightCart from "./Carts/HighlightCards";
import ReduxState from "../../Interfaces/ReduxState";

function HighlightRow() {

  const currentData = useSelector((state:ReduxState) => state.forecast.data.currentData);

  function uvRange():string {
    if (currentData.uv <= 5) return "low";
    else if (currentData.uv > 5 && currentData.uv < 8) return "moderate";
    else return "high"
  }

  return (
    <div className="flex flex-wrap items-center justify-start w-full gap-4 px-12 py-2" >
      <HighlightCart title="UV Index" data={currentData.uv.toString()} footer={uvRange()} />
      <HighlightCart title="Wind Status" data={currentData.wind_kmph.toString()} footer="km/h" />
      <HighlightCart title="Humidity" data={currentData.humidity.toString() + "%"} footer="low" />
      <HighlightCart title="Visibility" data={currentData.vis_km.toString() + " km/h"} footer="low" />
      <HighlightCart title="Sunrise & Sunset" data={currentData.sunrise}  footer={currentData.sunset} />
      <HighlightCart title="Air quality" data={currentData.aqi.toString()}  footer="low" />
  </div>
  );
}

export default HighlightRow;
