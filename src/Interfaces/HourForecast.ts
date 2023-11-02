export default interface HourForecast {
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: string;
  chance_of_rain: number;
}

   //  Handle Response Type
export  interface HourForecastRes {
    time:string,
    temp_c:string,
    temp_f:string,
    is_day : number   
    condition : { text : string }
    chance_of_rain:number,
}


