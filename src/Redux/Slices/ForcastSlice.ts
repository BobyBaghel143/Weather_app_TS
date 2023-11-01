import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ForecastDataState from "../../Interfaces/ForecastDataState";
import axiosInstance from "../../Config/axiosInstance";
import ForecastItemMap from "../../Interfaces/DayForecast";

const initialState: ForecastDataState = {
  status: "default",
  data: {
    location: {
      localtime: "",
      region: "",
      country: "",
      name: "",
    },
    currentData: {
      uv: 0,
      wind_kmph: 0,
      humidity: 0,
      vis_km: 0,
      aqi: 0,
      sunrise: "",
      sunset: "",
      temp_c: 0,
      temp_f: 0,
      condition: "",
      is_day: false,
      chance_of_rain: 0,
    },
    dayForecast: [],
  },
};

export const fetchData = createAsyncThunk("data/fetchdata",async (city: string) => {
    try {
      const response = await axiosInstance.get(
        `forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=${city}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        if (!action.payload) return;
        // console.log(action.payload);
        state.status = "success";
        // console.log("action", action);

        const { location, forecast, current } = action.payload.data;

        // setting location state maintain
        state.data.location = {
          name: location?.name,
          region: location?.region,
          country: location?.country,
          localtime: location?.localtime,
        };

        // Setting dayForeCast  state maintain
        state.data.dayForecast = forecast.forecastday.map((foreCastItem: ForecastItemMap) => {
            return {
              date: foreCastItem.date,
              avgtemp_c: foreCastItem.day.avgtemp_c,
              avgtemp_f: foreCastItem.day.avgtemp_f,
              condition: foreCastItem.day.condition.text,
            };
          }
        );

        // setting currentData  state maintain
        state.data.currentData = {
          uv: current.uv,
          wind_kmph: current.wind_kph,
          humidity: current.humidity,
          vis_km: current.vis_km,
          aqi: current.air_quality.pm2_5,
          temp_c: current.temp_c,
          temp_f: current.temp_f,
          is_day: current.is_day,
          condition: current.condition.text,
          sunrise: forecast.forecastday[0].astro.sunrise,
          sunset: forecast.forecastday[0].astro.sunset,
          chance_of_rain: forecast.forecastday[0].day.daily_chance_of_rain,
        };
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default forecastSlice.reducer;

