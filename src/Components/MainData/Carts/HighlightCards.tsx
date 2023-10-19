interface Highlights {
  title: string;
  data: string;
  footer: string;
}

function HighlightCart({ title, data, footer }: Highlights) {
  return (
    <div>
      <div className=" p-2 h-[13rem] w-[21rem] flex flex-col justify-between items-center border rounded-xl bg-gray-200 ">
        <div className="font-semibold text-lg w-full text-left ml-8 mt-2 text-gray-400 ">
          {title}
        </div>
        <div className="text-4xl font-semibold "> {data} </div>
        <p className="text-left text-sm w-full ml-8 mb-2 "> {footer} </p>
      </div>
    </div>
  );
}

export default HighlightCart;
