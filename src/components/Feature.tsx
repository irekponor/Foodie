import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";
import veggie from "../assets/veggie.jpg";
import berry from "../assets/berry.jpg";
import fruit from "../assets/fruit.jpg";
import fruitss from "../assets/fruitss.jpg";
import orange from "../assets/orange.jpg";
import { useCartContext } from "../context/UseCartContext";

// data
const data = [
  {
    id: 0,
    img1: <img src={berry} />,
    name: "Fresh Strawberries",
    price: "350$",
  },
  { id: 0, img2: <img src={fruit} />, name: "Fresh Apples", price: "350$" },
  {
    id: 0,
    img3: <img src={fruitss} />,
    name: "Fresh Raspberries",
    price: "350$",
  },
  { id: 0, img4: <img src={orange} />, name: "Fresh Oranges", price: "350$" },
];

const Feature = () => {
  const { addToCart } = useCartContext();

  const addProductToCart = () => {
    //  toast.success("Added to cart!");
    addToCart({ img, name, price });
  };

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Veggies</h3>
          <p className="text-gray-600 mt-2">
            Buy rare fresh fruits online for the best prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Snacks</button>
          <button className="text-gray-600 hover:text-color1">Fruits</button>
          <button className="text-gray-600 hover:text-color1">Bread</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="h-full w-full object-cover"
            src={veggie}
            alt="bla bla bla"
          />
        </div>

        {data.map((d) => (
          <div
            className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform 
      rounded-lg relative"
          >
            <div>{d.img1}</div>
            <div>{d.img2}</div>
            <div>{d.img3}</div>
            <div>{d.img4}</div>
            <div className="space-y-2 relative p-4">
              <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <h3 className="font-medium">{d.name}</h3>

              <h3 className="text-2xl font-medium text-red-600">{d.price}</h3>

              <button
                className="absolute -top-4 right-2 bg-color1 text-white text-[28px] w-[50px] h-[50px]
         rounded-full grid place-items-center cursor-pointer"
                onClick={addProductToCart}
              >
                <AiOutlineShopping />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
