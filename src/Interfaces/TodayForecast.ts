export default interface TodayForecast {
  time: string;
  image: string;
  temp_c: number;
  temp_f: number;
  condition: string;
  // is_day: number;
  // chance_of_rain: number;
}

// Handle Response Type
export interface TodayForecastRes {
    time: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    // is_day: number;
  // chance_of_rain: number;
}
