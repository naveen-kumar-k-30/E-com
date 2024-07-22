import "../../../index.css";
import { Gift, HandHeart, Search, ShoppingBag } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { flag } from "../../Images/Images";
import { Link } from "react-router-dom";
const dummyData = [
 {
      img: aniversary,
      title: "Anniversary gifts",
      para: "Anniversary gifts celebrate enduring love. Traditional themes like silver for the 25th year or modern personalized options like custom artwork or romantic getaways make these gifts special. Thoughtful presents reflect shared memories and future adventures, making them meaningful and memorable.",
      cardy: [
        { img: an1, title: "Wooden Gifts", rate: 200 },
        { img: an2, title: "Memorial frames", rate: 400 },
        { img: an3, title: "Glass frame", rate: 450 },
        { img: an4, title: "Rings", rate: 500 },
        { img: an5, title: "Dodge shield", rate: 600 },
        { img: an6, title: "wood frame", rate: 340 },
        { img: an7, title: "Frames", rate: 250 },
        { img: an8, title: "Lights", rate: 400 },
        { img: an9, title: "Rings", rate: 450 },
        { img: an10, title: "Holder", rate: 500 },
      ],
    },
    {
      img: bf,
      title: "Gifts for him",
      para: "Gifts for him should reflect his interests, from gadgets and sports gear to personalized items like engraved accessories. Whether it's a birthday, anniversary, or just because, choose gifts that resonate with his passions and show understanding of his individuality.",
      cardy: [
        { img: m1, title: "Tool kit", rate: 600 },
        { img: m2, title: "Watch", rate: 340 },
        { img: m3, title: "Frames", rate: 250 },
        { img: m4, title: "Wallets", rate: 400 },
        { img: m5, title: "Dollars", rate: 450 },
        { img: m6, title: "Cool sets", rate: 500 },
        { img: m7, title: "Clock", rate: 200 },
        { img: m8, title: "E-SETS", rate: 400 },
        { img: m9, title: "Purse", rate: 450 },
        { img: m10, title: "Holder", rate: 500 },
      ],
    },
    { img: gf, title: "Gifts for her", para: "Gifts for her should evoke joy and appreciation. Consider jewelry, spa treatments, fashionable accessories, or personalized items. Thoughtful experiences like romantic getaways or concerts celebrate her uniqueness and make her feel cherished and special." ,
      cardy: [
        { img: an1, title: "Wooden Gifts", rate: 200 },
        { img: an2, title: "Memorial frames", rate: 400 },
        { img: an3, title: "Glass frame", rate: 450 },
        { img: an4, title: "Rings", rate: 500 },
        { img: an5, title: "Dodge shield", rate: 600 },
        { img: an6, title: "wood frame", rate: 340 },
        { img: an7, title: "Frames", rate: 250 },
        { img: an8, title: "Lights", rate: 400 },
        { img: an9, title: "Rings", rate: 450 },
        { img: an10, title: "Holder", rate: 500 },
      ],
    },
    { img: wedding, title: "Wedding gifts", para: "Wedding gifts celebrate a couple's new journey. Traditional household items or modern personalized gifts like custom artwork and experiences make thoughtful presents. Consider the couple's tastes and registry to ensure your gift is both practical and meaningful.",cardy: [
      { img: m1, title: "Tool kit", rate: 600 },
      { img: m2, title: "Watch", rate: 340 },
      { img: m3, title: "Frames", rate: 250 },
      { img: m4, title: "Wallets", rate: 400 },
      { img: m5, title: "Dollars", rate: 450 },
      { img: m6, title: "Cool sets", rate: 500 },
      { img: m7, title: "Clock", rate: 200 },
      { img: m8, title: "E-SETS", rate: 400 },
      { img: m9, title: "Purse", rate: 450 },
      { img: m10, title: "Holder", rate: 500 },
    ], },
    { img: personal, title: "Personalised gift ideas", para: "Personalized gifts show thoughtfulness and care, tailored to reflect the recipient's personality and memorable moments. Custom jewelry, bespoke artwork, and personalized home decor make unique keepsakes, celebrating individuality and special memories.",cardy: [
      { img: an1, title: "Wooden Gifts", rate: 200 },
      { img: an2, title: "Memorial frames", rate: 400 },
      { img: an3, title: "Glass frame", rate: 450 },
      { img: an4, title: "Rings", rate: 500 },
      { img: an5, title: "Dodge shield", rate: 600 },
      { img: an6, title: "wood frame", rate: 340 },
      { img: an7, title: "Frames", rate: 250 },
      { img: an8, title: "Lights", rate: 400 },
      { img: an9, title: "Rings", rate: 450 },
      { img: an10, title: "Holder", rate: 500 },
    ], },
    
    { img: home, title: "Housewarming gifts", para: "Housewarming gifts congratulate someone on their new home. Practical yet stylish items like kitchen gadgets, cozy blankets, or personalized decor make great choices. Plants, candles, or custom doormats help transform a house into a welcoming home.",cardy: [
      { img: m1, title: "Tool kit", rate: 600 },
      { img: m2, title: "Watch", rate: 340 },
      { img: m3, title: "Frames", rate: 250 },
      { img: m4, title: "Wallets", rate: 400 },
      { img: m5, title: "Dollars", rate: 450 },
      { img: m6, title: "Cool sets", rate: 500 },
      { img: m7, title: "Clock", rate: 200 },
      { img: m8, title: "E-SETS", rate: 400 },
      { img: m9, title: "Purse", rate: 450 },
      { img: m10, title: "Holder", rate: 500 },
    ], },
    { img: friend, title: "Friendship gifts", para: "Friendship gifts celebrate the bond shared with a close friend. Personalized items like custom jewelry, photo books, or matching accessories are heartfelt choices. Fun gifts and shared experiences create lasting memories, showing appreciation and understanding.",cardy: [
      { img: an1, title: "Wooden Gifts", rate: 200 },
      { img: an2, title: "Memorial frames", rate: 400 },
      { img: an3, title: "Glass frame", rate: 450 },
      { img: an4, title: "Rings", rate: 500 },
      { img: an5, title: "Dodge shield", rate: 600 },
      { img: an6, title: "wood frame", rate: 340 },
      { img: an7, title: "Frames", rate: 250 },
      { img: an8, title: "Lights", rate: 400 },
      { img: an9, title: "Rings", rate: 450 },
      { img: an10, title: "Holder", rate: 500 },
    ], },
    { img: fam, title: "Family gifts", para: "Family gifts show love and appreciation, focusing on activities or items enjoyed together. Board games, personalized photo albums, or family vacations foster bonding. Practical gifts like home appliances or subscription boxes reflect shared moments and family dynamics.",cardy: [
      { img: m1, title: "Tool kit", rate: 600 },
      { img: m2, title: "Watch", rate: 340 },
      { img: m3, title: "Frames", rate: 250 },
      { img: m4, title: "Wallets", rate: 400 },
      { img: m5, title: "Dollars", rate: 450 },
      { img: m6, title: "Cool sets", rate: 500 },
      { img: m7, title: "Clock", rate: 200 },
      { img: m8, title: "E-SETS", rate: 400 },
      { img: m9, title: "Purse", rate: 450 },
      { img: m10, title: "Holder", rate: 500 },
    ], },
    { img: prof, title: "Professional gifts", para: "Professional gifts recognize colleagues or business associates. High-quality stationery, tech gadgets, gourmet baskets, or personalized desk accessories are thoughtful and appropriate. Consider the recipient's tastes and professional setting to convey appreciation and respect.",cardy: [
      { img: an1, title: "Wooden Gifts", rate: 200 },
      { img: an2, title: "Memorial frames", rate: 400 },
      { img: an3, title: "Glass frame", rate: 450 },
      { img: an4, title: "Rings", rate: 500 },
      { img: an5, title: "Dodge shield", rate: 600 },
      { img: an6, title: "wood frame", rate: 340 },
      { img: an7, title: "Frames", rate: 250 },
      { img: an8, title: "Lights", rate: 400 },
      { img: an9, title: "Rings", rate: 450 },
      { img: an10, title: "Holder", rate: 500 },
    ], },
    { img: long, title: "Long Distance gifts", para: "Long-distance gifts bridge the gap and maintain connections. Personalized items, subscription services, care packages, or virtual experiences make the distance feel smaller. Thoughtful gifts show effort and keep the bond strong despite the miles apart." },
  
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
