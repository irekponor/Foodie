import { BsArrowRight } from "react-icons/bs";
import image from "../assets/image.jpg";
import img from "../assets/img.jpg";
import image2 from "../assets/image2.jpg";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt="hero image"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-gray-200 text-2xl hidden sm:block">
              100% Original Soft Cookies
            </p>
            <h2 className="text-gray-200 text-2xl sm:text-4xl md:text-6xl font-bold">
              Best Healthy Cookie
            </h2>
            <p className="text-gray-200 text-xl pt-4 sm:pt-8">Starting at</p>
            <div className="font-medium text-gray-200 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $24.99
            </div>
            <a href="*">
              <div
                className="bg-color2 hover:bg-color1 text-white rounded-full w-fit flex items-center 
            gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer"
              >
                Shop now <BsArrowRight />
              </div>
            </a>
          </div>
        </div>

        <div className="relative ">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={img}
            alt="img picture"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold">
              Best French Fries
            </h2>
            <p className="text-gray-200 text-xl pt-4">Starting at</p>
            <div className="font-medium text-gray-200 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $27
            </div>
            <div
              className="bg-color2 hover:bg-color1 text-white rounded-full w-fit flex items-center 
            gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer"
            >
              Shop now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={image2}
            alt="image 2 picture"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-gray-200 text-2xl sm:text-3xl font-bold">
              Best Hot Burgers
            </h2>
            <p className="text-gray-800 text-xl pt-4">Starting at</p>
            <div className="font-medium text-gray-800 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $15
            </div>
            <div
              className="bg-color2 hover:bg-color1 text-white rounded-full w-fit flex items-center 
            gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer"
            >
              Shop now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
