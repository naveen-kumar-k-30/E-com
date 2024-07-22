import "../../../index.css";
import { Gift, HandHeart, Search, ShoppingBag } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { flag } from "../../Images/Images";
import { Link } from "react-router-dom";
const dummyData = [
  {
    title: "Anniversary gifts",
  },
  {
    title: "Gifts for him",
  },
  { title: "Gifts for her" },
  { title: "Wedding gifts" },
  { title: "Personalised gift ideas" },

  { title: "Housewarming gifts" },
  { title: "Friendship gifts" },
  { title: "Family gifts" },
  { title: "Professional gifts" },
  { title: "Long Distance gifts" },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const [data, setData] = useState(dummyData);
  const [filterData, setFilterData] = useState(dummyData);
  const [searchdata, setSearchData] = useState("");

  const handleSearch = () => {
    const searchedText = data.filter(
      (e) => e.title.toString().toLowerCase() === searchdata
    ); // it compares the exact match of substring
    setFilterData(searchedText);
  };
  return (
    <>
      <div className="2xl:container mx-auto bg-white">
        <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center py-4 border-b">
          <div className="flex items-center">
            <p className="text-3xl great-vibes font-bold text-[#FFD700]">
              Smiley
            </p>
          </div>
          <div className="relative col-span-2 lg:col-span-1 order-3 lg:order-2">
            <div className="bg-white border rounded-full p-1 flex items-center">
              <input
                type="text"
                placeholder="Search for anything"
                className="flex-grow px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
                onClick={toggle}
                onChange={(e) => {
                  const typedValue = e.target.value.toString().toLowerCase();
                  const filteredData = data.filter((e1) =>
                    e1.title.toString().toLowerCase().includes(typedValue)
                  ); // searching without button
                  setFilterData(filteredData);
                  setSearchData(typedValue);
                }}
              />
              <button
                onClick={handleSearch}
                className="bg-[#FFD700] hover:bg-yellow-500 rounded-full p-2 flex justify-center items-center"
              >
                <Search className="text-white" />
              </button>
            </div>
            <div className={show ? "block" : "hidden"}>
              <div className="absolute bg-white w-full mt-1 shadow-lg rounded-lg z-10  ">
                {
                  filterData.length > 0 ? ( //using ternary operator
                    filterData.map(
                      (
                        e,
                        index //true part
                      ) => (
                        <p
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200"
                          onClick={toggle}
                        >
                          {e.title}
                        </p>
                      )
                    )
                  ) : (
                    <p>No results found</p>
                  ) //else part
                }
              </div>
            </div>
          </div>
          <div className="order-2  lg:order-3 flex justify-end">
            <ul className="grid grid-cols-5 space-x-4">
              <li>
                <Link to="/Sign_in">
                  <button className="flex items-center text-gray-700">
                    Sign in
                  </button>
                </Link>
              </li>
              <li>
                <Link to="">
                  <LazyLoadImage
                    alt={flag}
                    effect="opacity"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={flag}
                    className="w-6 h-6 rounded-full border-2 border-gray-700"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <HandHeart className="text-gray-700" />
                </Link>
              </li>
              <li>
                <Link>
                  <Gift className="text-gray-700" />
                </Link>
              </li>
              <li>
                <Link>
                  <ShoppingBag className="text-gray-700" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
