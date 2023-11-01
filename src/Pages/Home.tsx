import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import NightImage from "../assets/NightCloud.png";
import {useEffect, useState} from 'react'
import { fetchData } from "../Redux/Slices/ForcastSlice";
import { useAppDispatch } from "../Hooks/hooks";
import axios from "axios";

function Home() {
  
  const dispatch = useAppDispatch();
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    console.log(city, "cityReq")
    if (!city) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOC_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
        setCity(response?.data?.address?.city);
      })
      dispatch(fetchData('Aligarh'))
    }
    else {
      dispatch(fetchData(city));
    }
  }, [city])

  return (
    <div
      className="min-h-[100vh] px-8 py-8 flex flex-row  justify-center items-stretch"
      style={{backgroundSize: "cover", background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${NightImage})`}} >
      <Sidebar />
      <MainData />
    </div>
  );
}

export default Home;
