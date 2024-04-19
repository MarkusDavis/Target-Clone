import { useContext } from "react";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function CartIcon() {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div className="relative">
      <FaShoppingCart className="w-6 h-6" />
      {cartItems.length > 0 && (
        <span className="absolute top-0 left-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          {cartItems.length}
        </span>
      )}
    </div>
  );
}
