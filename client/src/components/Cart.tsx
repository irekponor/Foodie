import { useCartContext } from "../context/UseCartContext";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";

const Cart = ({ setShowCart }: { setShowCart: (show: boolean) => void }) => {
  const { product, removeFromCart } = useCartContext(); // Get remove function from context

  return (
    <div
      className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
      onClick={() => setShowCart(false)}
    >
      <div
        className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        <div className="mt-6">
          {product?.map((el) => (
            <CartProduct
              key={el.name}
              img={el.img}
              name={el.name}
              price={el.price}
              onRemove={() => removeFromCart(el.name)} // Pass remove function
            />
          ))}
        </div>
        <a href="*">
          <button className="bg-color1 text-white text-center w-full rounded-3xl py-2 hover:bg-color2 mb-4 mt-4">
            View Cart
          </button>
        </a>
        <a href="*">
          <button className="bg-color1 text-white text-center w-full rounded-3xl py-2 hover:bg-color2">
            Check Out
          </button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
