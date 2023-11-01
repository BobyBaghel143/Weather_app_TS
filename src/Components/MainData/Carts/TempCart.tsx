interface Temperature {
  title: string;
  image: string;
  temp: string;
}

function TempCart({ title, image, temp,  }: Temperature) {
  return (
    <div className=" flex flex-col items-center justify-between border  bg-white  rounded-xl h-[10rem] w-[8.4rem] cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 shadow-md  ">
      <div className="font-semibold text-lg h-[2rem] w-[100%] text-center text-white rounded-tr-xl rounded-tl-xl bg-green-500">{title}</div>
      <div className="h-[40%]">
        <img src={image} className="h-full" />
      </div>
      <div className="font-semibold text-lg bg-yellow-100 w-full text-center rounded-br-xl rounded-bl-xl ">{temp}°C</div>
    </div>
  );
}

export default TempCart;



