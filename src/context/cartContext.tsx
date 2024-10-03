import { createContext, ReactNode, useContext, useState } from "react";

interface ICartContext {
  product: unknown[];
  addToCart: (cart: unknown) => void;
}

const CartContext = createContext<ICartContext>({
  product: [],
  addToCart: () => {},
});

interface ICartContextProvider {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [product, setProduct] = useState<unknown[]>([]);

  const addToCart = (cart: unknown) => {
    if (typeof cart === "object" && cart !== null) {
      // Type checking before using unknown
      setProduct((prevCart: unknown[]) => [...prevCart, cart]);
    } else {
      console.error("Invalid cart item");
    }
  };

  return (
    <CartContext.Provider value={{ product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
