import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardFooter } from "@/components/ui/card";
import HolidayMessage from "./Message";
import Link from "next/link";

export function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title, // Make sure the 'title' field is correctly mapped
        ...doc.data(),
      }));
      setProducts(productsArray);
    };
  
    fetchProducts();
  }, []);
  return (
    <div className="bg-[#ffedd5] p-8">
      <div className="text-center">
        <HolidayMessage />
        <Button className="bg-target text-white">Shop now</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card className="bg-white">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto rounded-t-lg mb-4"
              />
              <CardContent>
                <p className="text-lg font-semibold">{product.price}</p>
                <p className="text-sm">{product.name}</p>
              </CardContent>
              <CardFooter>
                <Button>Add to cart</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}