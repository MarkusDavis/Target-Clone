import { useContext } from "react";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems } = useContext(ShoppingCartContext);

  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const estimatedTax = subtotal * 0.08; // Assuming an 8% tax rate
  const total = subtotal + estimatedTax;

  const handlePlaceOrder = () => {
    // Handle placing the order
  };

  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image src={item.imageUrl} alt={item.title} width={80} height={80} />
                <div className="ml-4">
                  <p className="font-bold">{item.title}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <p>Subtotal ({cartItems.length} item):</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Pickup:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated taxes:</p>
                <p>${estimatedTax.toFixed(2)}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-bold">
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <div className="mb-4">
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                Credit or debit card
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                  placeholder="Card number"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                Name on card
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name-on-card"
                  id="name-on-card"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                  placeholder="Name on card"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                Expiration date
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="expiration-date"
                  id="expiration-date"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                  placeholder="MM/YY"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="security-code" className="block text-sm font-medium text-gray-700">
                Security code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="security-code"
                  id="security-code"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="billing-address" className="block text-sm font-medium text-gray-700">
                Billing address
              </label>
              <div className="mt-1">
                <textarea
                  id="billing-address"
                  name="billing-address"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Enter billing address"
                />
              </div>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md w-full font-bold"
              onClick={handlePlaceOrder}
            >
              Place your order
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}