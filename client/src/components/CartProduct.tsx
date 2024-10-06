import { RxCross1 } from "react-icons/rx";

interface propsType {
  img: string;
  name: string;
  price: string;
}

const CartProduct: React.FC<propsType> = ({ img, name, price }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="h-[100px]" src={img} alt="" />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">1 x {price}</p>
        </div>
      </div>

      <RxCross1 />
    </div>
  );
};

export default CartProduct;
