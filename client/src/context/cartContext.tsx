import { createContext, useState } from "react";

interface ProductType {
  img: string;
  name: string;
  price: string;
}

interface CartContextType {
  product: ProductType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (name: string) => void; //  Add removeFromCart function
}

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [product, setProduct] = useState<ProductType[]>([]);

  // Function to remove an item from the cart
  const removeFromCart = (name: string) => {
    setProduct((prev) => prev.filter((item) => item.name !== name));
  };

  // Function to add an item to the cart
  const addToCart = (item: ProductType) => {
    setProduct((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ product, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
