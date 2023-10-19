interface Temperature {
  title: string;
  image: string;
  temp: string;
}

function TempCart({ title, image, temp }: Temperature) {
  return (
    <div className=" flex flex-col items-center justify-between border  bg-blue-200  rounded-xl h-[10rem] w-[8rem] p-2">
      <div className="font-semibold text-lg">{title}</div>
      <div className="h-[40%]">
        <img src={image} className="h-full" />
      </div>
      <div className="font-semibold text-lg">{temp}</div>
    </div>
  );
}

export default TempCart;
