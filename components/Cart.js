import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Link from 'next/link';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      getDoc(userRef).then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
          setCartCount(doc.data().cart.length);
        }
      });
    }
  }, [user]);

  const addToCart = async (productId) => {
    if (userData) {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        cart: arrayUnion(productId),
      });
      setCartCount(cartCount + 1);
    }
  };

  const removeFromCart = async (productId) => {
    if (userData) {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        cart: arrayRemove(productId),
      });
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="relative">
      <Link href="/cart">
        <div className="flex items-center cursor-pointer">
          <svg viewBox="0 0 32 32" width="24px">
            <image
              height="100%"
              href="https://www.target.com/icons/assets/glyph/Cart.svg#Cart"
              width="100%"
            ></image>
          </svg>
          <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-2">{cartCount}</span>
        </div>
      </Link>
      {/* Add/Remove from Cart buttons (example) */}
      <button onClick={() => addToCart('product123')} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
      <button onClick={() => removeFromCart('product123')} className="bg-red-500 text-white px-4 py-2 rounded">
        Remove from Cart
      </button>
    </div>
  );
};

export default Cart;