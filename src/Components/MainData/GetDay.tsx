type Day = {
  day: number;
};

export default function GetDay({ day }: Day) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return <span>{weekdays[day]}</span>;
}
