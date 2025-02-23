import { RxCross1 } from "react-icons/rx";

interface PropsType {
  img: string;
  name: string;
  price: string;
  onRemove: () => void; // Function to remove item
}

const CartProduct: React.FC<PropsType> = ({ img, name, price, onRemove }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="h-[100px]" src={img} alt={name} />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">1 x {price}</p>
        </div>
      </div>

      <RxCross1 className="cursor-pointer" onClick={onRemove} />
    </div>
  );
};

export default CartProduct;
