import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function AccountDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div
      className={`cursor-pointer rounded-sm border-2 border-dashed px-4 py-2 ${
        isDrawerOpen ? "bg-gray-200" : "bg-white"
      }`}
      onClick={toggleDrawer}
    >
      Account
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Account</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeDrawer}
            >
              <FaTimes />
            </button>
          </div>
          <div className="p-4">
            <a href="/signin" className="block py-2 hover:bg-gray-100">
              Sign In
            </a>
            <a href="/create-account" className="block py-2 hover:bg-gray-100">
              Create Account
            </a>
            <a href="/orders" className="block py-2 hover:bg-gray-100">
              Orders
            </a>
            <a href="/gift-cards" className="block py-2 hover:bg-gray-100">
              Gift Cards
            </a>
            <a href="/registry" className="block py-2 hover:bg-gray-100">
              Registry
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountDrawer;
