import React, { useEffect, useState } from "react";
import { db } from "../firebase/config"; // Adjust the import path according to your project structure
import { collection, getDocs } from "firebase/firestore";

export const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">${product.price}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
