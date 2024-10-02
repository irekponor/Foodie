const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src=""
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
