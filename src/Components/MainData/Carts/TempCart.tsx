interface Temperature {
  title: string;
  image: string;
  temp: string;
  condition: string;
}

function TempCart({ title, image, temp, condition }: Temperature) {
  return (
    <div className=" flex flex-col h-[165px] items-center justify-between border  bg-white  rounded-xl cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:shadow-md relative "
      title={condition}
    >
      <div className="w-[150px] h-[165px] text-center flex flex-col justify-between items-center ">
        <div className="bg-[#3dd1db] w-full py-1 px-2 rounded-t-3xl text-white text-center">
          <p className="text-sm"> {condition} </p>
        </div>
        <div className="font-semibold text-lg w-full text-center text-black "> {title} </div>
        <div className="">
          <img src={image} className="max-h-[50px] w-full" />
        </div>
        <div className="font-semibold text-lg bg-yellow-100 w-full text-center rounded-br-xl rounded-bl-xl "> {temp}</div>
      </div>
    </div>
  );
}

export default TempCart;
