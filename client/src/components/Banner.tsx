import img3 from "../assets/img3.jpg";

const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-95 transition-transform"
            src={img3}
            alt=""
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-95 transition-transform"
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
