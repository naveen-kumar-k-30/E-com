import { IndianRupee } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { flag } from "../../Images/Images";

const Footer = () => {
  return (
    <>
      <div className="2xl:container mx-auto w-[100%] bg-black text-white text-xs">
        <div className="w-[90%] flex flex-col justify-center items-center gap-4">
          <div className="grid lg:grid-cols-2  ">
            <div className="flex justify-start items-center ">
              <div className="grid grid-cols-3 gap-4 py-8">
                <div className="flex justify-center items-center gap-1">
                  <LazyLoadImage
                    alt={flag}
                    effect="opacity"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={flag}
                    className="w-6 h-6 rounded-full border-2 border-gray-700"
                  />
                  <p>India</p>
                </div>
                <div className="flex justify-center items-center border-x-2 px-4">
                  <p>English &#40;UK&#41;</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <IndianRupee className="w-4" />
                  <p>&#91;INR&#93;</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 pl-12 gap-2 py-8">
              <div className="flex justify-center items-center">
                <p>&#169; 2024 Smiley, Inc.</p>
              </div>
              <div className="flex justify-center items-center underline">
                <p> Terms of Use</p>
              </div>
              <div className="flex justify-center items-center underline">
                <p> Privacy</p>
              </div>
              <div className="flex justify-center items-center underline">
                <p> Interest-based ads</p>
              </div>
              <div className="flex justify-center items-center underline">
                <p> Local Shops</p>
              </div>
              <div className="flex justify-center items-center underline">
                <p> Regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
