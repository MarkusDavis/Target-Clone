import { useContext } from "react";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { AuthContext } from "@/context/AuthContext";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateItemQuantity } = useContext(ShoppingCartContext);
  const { user } = useContext(AuthContext);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateItemQuantity(itemId, quantity);
  };

  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const total = subtotal + 1.70; // Assuming a fixed shipping cost of 1.70

  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold mb-8">Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Cart items */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">${subtotal.toFixed(2)} subtotal • {cartItems.length} item(s)</p>
              <button className="text-red-600 hover:underline">Order Pickup</button>
            </div>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-4">
                    <Image src={item.imageUrl} alt={item.title} width={80} height={80} />
                    <div className="ml-4">
                      <p className="font-bold">{item.title}</p>
                      <p>Price: ${item.price}</p>
                      <div className="flex items-center mt-2">
                        <label htmlFor={`quantity-${item.id}`} className="mr-2">Qty:</label>
                        <select
                          id={`quantity-${item.id}`}
                          className="border border-gray-300 rounded-md px-2 py-1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        >
                          {[...Array(5).keys()].map((qty) => (
                            <option key={qty + 1} value={qty + 1}>
                              {qty + 1}
                            </option>
                          ))}
                        </select>
                        <button className="ml-4 text-red-600 hover:underline" onClick={() => handleRemoveItem(item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="mt-4 text-red-600 hover:underline" onClick={handleClearCart}>
                  Clear Cart
                </button>
              </div>
            )}
            {/* Add a substitute */}
            {/* Order Pickup */}
            {/* Saved for later */}
            {/* Recently viewed items */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order summary</h2>
            <p className="text-lg font-bold mb-4">${total.toFixed(2)} total</p>
            <p className="text-sm text-gray-500 mb-4">{cartItems.length} item(s)</p>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="gift-message" className="mr-2" />
              <label htmlFor="gift-message" className="text-sm">Not eligible for gift message</label>
            </div>
            <div className="mb-4">
              <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Promo code</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="promo-code"
                  id="promo-code"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                  placeholder="Enter code"
                />
                <button className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  Add
                </button>
              </div>
            </div>
            <Link href={user ? "/checkout" : "/login"}>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md w-full font-bold mb-4">
                {user ? "Checkout Now" : "Sign in to check out"}
              </button>
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm mb-2">
                Get Free Shipping on most items* at Target.com with @RedCard
              </p>
              <button className="bg-white text-red-600 px-4 py-2 rounded-md border border-red-600">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}