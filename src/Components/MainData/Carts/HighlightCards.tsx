interface Highlights {
  title: string;
  data: string;
  footer: string;
}

function HighlightCart({ title, data, footer }: Highlights) {
  return (
      <div className=" p-2 h-[13rem] w-[22rem] flex flex-col justify-between items-center border rounded-xl bg-gray-200 cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 shadow-md ">
        <div className="font-semibold text-lg w-full text-left ml-8 mt-2 text-gray-400 ">
          {title}
        </div>
        <div className="text-4xl font-semibold "> {data} </div>
        <p className="text-left text-sm w-full ml-8 mb-2 "> {footer} </p>
      </div>
  );
}

export default HighlightCart;

