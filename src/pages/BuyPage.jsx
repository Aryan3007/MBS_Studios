import { useState } from "react";

const BuyPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [array, setArray] = useState([
    {
      backgroundImage: "./img2.png",
      name: "Game One",
    },
    {
      backgroundImage: "./try1.png",
      name: " Game Two",
    },
    {
      backgroundImage: "./img3.png",
      name: " Game Three",
    },
    {
      backgroundImage: "./img4.png",
      name: " Game Four",
    },
    {
      backgroundImage: "./img5.png",
      name: " Game Five",
    },
    {
      backgroundImage: "./img6.png",
      name: " Game Six",
    },
  ]);

  const [show, setShow] = useState([]);

  const handleMouseEnter = (index) => {
    setShow((prevShow) => {
      if (!prevShow.includes(array[index])) {
        return [...prevShow, array[index]];
      }
      return prevShow;
    });
  };

  const handleMouseLeave = (index) => {
    setShow((prevShow) => {
      return prevShow.filter((item) => item !== array[index]);
    });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="flex w-2/3 flex-wrap gap-4 justify-start">
        {array.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center max-w-sm"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className="w-full h-64 bg-gray-300 bg-top bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            />
            <div className="w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
                {item.name}
              </h3>
              <div className="flex items-center justify-between px-3 py-2 bg-gray-200">
                <span className="font-bold text-gray-800">$129</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-purple-800 rounded hover:bg-purple-700 focus:bg-purple-700 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-96 hidden text-zinc-800 w-1/3 lg:flex md:hidden sm:hidden gap-4 flex-col justify-evenly items-center">
        <div className="h-96 w-1/3 absolute justify-center items-center flex">
          {show.map((image, index) => (
            <img className="" key={index} src={image.backgroundImage} alt="" />
          ))}
        </div>
        <h1 className="text-7xl font-semibold">MBS STUDIOS</h1>
        <h1 className="text-7xl font-semibold">MBS STUDIOS</h1>
        <h1 className="text-7xl font-semibold">MBS STUDIOS</h1>
        <h1 className="text-7xl font-semibold">MBS STUDIOS</h1>
        <h1 className="text-7xl font-semibold">MBS STUDIOS</h1>
        <h1 className="text-7xl font-semibold">MBS STUDIOS</h1>
      </div>
    </div>
  );
};

export default BuyPage;
