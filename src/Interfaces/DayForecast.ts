export default interface ForecastItemMap {
  date: string;
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
    };
  };
}



