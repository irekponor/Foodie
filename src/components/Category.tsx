import img2 from "../assets/img2.jpg";

const data = [
  {
    id: 0,
    name: "Ice Cream",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 1,
    name: "Ice Cream",
    count: "8 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 2,
    name: "Ice Cream",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 3,
    name: "Ice Cream",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 4,
    name: "Fresh bread",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 5,
    name: "Canned Soda",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 6,
    name: "Fresh Foods",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
  {
    id: 7,
    name: "Fresh Drinks",
    count: "9 products",
    img: <img src={img2} alt="" />,
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((d) => (
          <div
            className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform
          rounded-lg"
          >
            <div className="flex justify-between items-center p-6">
              <div className="space-y-4">
                <h3 className="font-medium text-xl">{d.name}</h3>
                <p className="text-gray-500">{d.count}</p>
              </div>
              <div className="w-[100px]">{d.img}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
