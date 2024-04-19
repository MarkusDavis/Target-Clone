// components/PaymentPage.js
import React, { useState, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { AuthContext } from "../context/AuthContext";
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";

const PaymentPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
    );
    setTotal(total.toFixed(2));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "payments"), {
        uid: user.uid,
        total: total,
        email: user.email,
        cardHolderName,
        cardNumber,
        expirationDate,
        securityCode,
        billingAddress,
        billingCity,
        billingState,
        billingZip,
        shippingMethod,
      });

      // Redirect to order confirmation page
      window.location.href = "/order-confirmation";
    } catch (error) {
      console.error("Error submitting payment:", error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div class="text-center">
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            Show drawer
          </button>
        </div>

        <div
          id="drawer-example"
          class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-label"
        >
          <h5
            id="drawer-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              class="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Info
          </h5>
          <Image width="100" height="100" src="../images/banner.jpg" alt="Example WEBP Image" />
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close menu</span>
          </button>

          <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our{" "}
            <a
              href="#"
              class="text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              limited-time sale
            </a>{" "}
            for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <a
              href="#"
              class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Learn more
            </a>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get access{" "}
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {user ? (
          <div className="">
            <div className="w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="mb-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-12 h-12 mr-2 rounded"
                      />
                      <span className="text-gray-700">{item.title}</span>
                    </div>
                    <span className="font-bold text-gray-700">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">Subtotal:</span>
                  <span className="font-bold text-gray-800">${total}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-gray-800">Shipping:</span>
                  <span className="font-bold text-gray-800">$8.00</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-gray-800">Total:</span>
                  <span className="font-bold text-gray-800">
                    ${(parseFloat(total) + 8).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Shipping Method</h3>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fedex"
                    name="shippingMethod"
                    value="fedex"
                    checked={shippingMethod === "fedex"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="fedex" className="text-gray-700">
                    FedEx
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="usps"
                    name="shippingMethod"
                    value="usps"
                    checked={shippingMethod === "usps"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="usps" className="text-gray-700">
                    USPS
                  </label>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
              <p className="text-gray-700 mb-4">
                Complete your order and enter information.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="cardHolderName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolderName"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 flex">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="expirationDate"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expirationDate"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      htmlFor="securityCode"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Security Code
                    </label>
                    <input
                      type="text"
                      id="securityCode"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="billingAddress"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Billing Address
                  </label>
                  <input
                    type="text"
                    id="billingAddress"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 flex">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="billingCity"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="billingCity"
                      value={billingCity}
                      onChange={(e) => setBillingCity(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      htmlFor="billingState"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="billingState"
                      value={billingState}
                      onChange={(e) => setBillingState(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="billingZip"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="billingZip"
                    value={billingZip}
                    onChange={(e) => setBillingZip(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-gray-600">Please sign in to view your cart.</div>
        )}
      </div>
    </Layout>
  );
};

export default PaymentPage;
