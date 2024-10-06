import { LuMailOpen } from "react-icons/lu";

const News = () => {
  return (
    <div className="bg-color2 mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Sign Up To Our Newsletters
            </h3>
            <p>..... and get a whooping $80 coupon for first 3 shoppings</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input
            className="py-4 px-6 w-full rounded-full"
            type="text"
            placeholder="Your Email Address"
          />
          <button
            className="bg-color2 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4
           rounded-full hover:bg-color1"
          >
            Suscribe!
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
