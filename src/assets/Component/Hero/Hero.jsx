import { LazyLoadImage } from "react-lazy-load-image-component";
import { baby, bday, garden, house, school, weds } from "../../Images/Images";

const Hero = () => {
  const circles = [
    {
      img: bday,
      title: "Birthday Gifts",
    },
    {
      img: school,
      title: "School Gifts",
    },
    {
      img: weds,
      title: "Wedding Gifts",
    },
    {
      img: house,
      title: "Home Gifts",
    },
    {
      img: garden,
      title: "Garden Gifts",
    },
    {
      img: baby,
      title: "Baby Gifts",
    },
  ];

  return (
    <div className="2xl:container mx-auto w-[100%] ">
      <div className=" flex flex-col justify-center items-center gap-4">
        <div className="bg-cover bg-hero-pattern bg-center bg-no-repeat flex flex-col justify-start items-center gap-8 w-full h-[80vh]">
          <p className="text-center mt-24 great-vibes text-5xl lg:text-7xl text-[#FFD700] ">Smiley Gifts!!</p>
          <div className="flex justify-center items-center  bg-white gap-2 py-2 px-4 rounded-full">
            <button className="great-vibes glitter-button px-2  bg-[#FFD700]">
              Make a Deal
            </button>
            <p className="playfair-display text-sm sm:text-base md:text-lg ">with our Wonderful Creators</p>
          </div>
        </div>
        {/* hero second part */}
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <h1 className="text-3xl text-center playfair-display">
            Shop from talented creators and curators!
          </h1>
        </div>
        <div className="w-[70%] mx-auto grid grid-cols-3 lg:grid-cols-6">
          {circles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-4 gap-2"
            >
              <LazyLoadImage
                alt={item.img}
                effect="opacity"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
                src={item.img}
                className="w-24 rounded-full"
              />
              <p className="playfair-display">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
