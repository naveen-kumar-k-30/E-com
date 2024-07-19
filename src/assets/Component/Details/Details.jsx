import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Filter, ReceiptIndianRupee } from "lucide-react";

const Details = () => {
  const location = useLocation();
  const { img, title, paragraph, cardx } = location.state;
  const [pop, setPop] = useState(false);
  const [data, setData] = useState(cardx);
  const [filterData, setFilterData] = useState(cardx);

  const toggle = () => setPop(!pop);

  const limitFilter = (a, b) => {
    const filteredData = data.filter((item) => typeof item.rate === "number" && item.rate >= a && item.rate <= b);
    setFilterData(filteredData);
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col">
      <h1 className="text-center text-4xl playfair-display mt-4 mb-4">{title}</h1>
      
      <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center gap-2 p-2">
        <div className="flex border-2 rounded-full px-2 py-1 gap-1 items-center w-full md:w-[35%] lg:w-[32%]">
          <Filter className="w-5 text-[#FFD700]" />
          <button onClick={toggle} className="playfair-display">Filter By</button>
        </div>
        <div className="relative col-span-2 lg:col-span-1 order-3 lg:order-2">
          <div className={pop ? "block" : "hidden"}>
            <div className="flex-grow">
              <div className="grid grid-cols-3 gap-4 mt-2 md:mt-0">
                <button className="flex items-center gap-1 text-center playfair-display border-2 rounded-lg p-1 text-gray-700" onClick={() => limitFilter(200, 300)}>
                  <ReceiptIndianRupee className="text-[#FFD700] w-5" />
                  <p>200-300</p>
                </button>
                <button className="flex items-center gap-1 text-center playfair-display border-2 rounded-lg p-1 text-gray-700" onClick={() => limitFilter(300, 400)}>
                  <ReceiptIndianRupee className="text-[#FFD700] w-5" />
                  <p>300-400</p>
                </button>
                <button className="flex items-center gap-1 text-center playfair-display border-2 rounded-lg p-1 text-gray-700" onClick={() => limitFilter(400, 500)}>
                  <ReceiptIndianRupee className="text-[#FFD700] w-4" />
                  <p>400-500</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-3 flex justify-end">
          <div className={pop ? "block" : "hidden"}>
            <button className="playfair-display flex items-center text-center border-2 rounded-lg p-1 mt-2 text-gray-700" onClick={() => setFilterData(data)}>
              All
            </button>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {filterData.map((cardx, index) => (
          <Link key={index} to={`/details/${index}`} state={{ img: cardx.img, title: cardx.title }} className="block">
            <div className="bg-white flex flex-col justify-center items-center shadow-lg p-4 gap-2 rounded-lg">
              <LazyLoadImage alt={cardx.title} effect="opacity" src={cardx.img} className="w-full h-48 object-cover rounded-t-lg" />
              <p className="playfair-display text-center mt-2">{cardx.title}</p>
              <div className="flex gap-2 items-center justify-center">
                <ReceiptIndianRupee className="text-[#FFD700] w-5" />
                <p className="playfair-display text-center mt-1">{cardx.rate}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="md:w-[80%] lg:w-[40%] mx-auto grid grid-cols-1 md:grid-cols-2 p-5 gap-5 shadow-lg rounded-lg mb-6">
        <div className="flex justify-center items-center">
          <img src={img} alt={title} className="w-48 h-48 object-cover rounded-t-lg" />
        </div>
        <p className="text-center text-black playfair-display">{paragraph}</p>
      </div>
    </div>
  );
};
export default Details;
