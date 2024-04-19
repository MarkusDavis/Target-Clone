import { createContext, useState, useEffect, useContext } from "react";
import { db } from "@/firebase/config";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "./AuthContext";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    let unsubscribe = null;

    const fetchCart = async () => {
      if (user) {
        const cartRef = doc(db, "carts", user.uid);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
          setCartItems(cartSnap.data().items);
        } else {
          await setDoc(cartRef, { items: [] });
        }

        unsubscribe = onSnapshot(cartRef, (snapshot) => {
          setCartItems(snapshot.data().items);
        });
      }
    };

    fetchCart();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  const addToCart = async (item) => {
    if (user) {
      const cartRef = doc(db, "carts", user.uid);
      await updateDoc(cartRef, {
        items: [...cartItems, item],
      });
    }
  };

  const removeFromCart = async (itemId) => {
    if (user) {
      const updatedItems = cartItems.filter((item) => item.id !== itemId);
      const cartRef = doc(db, "carts", user.uid);
      await updateDoc(cartRef, {
        items: updatedItems,
      });
    }
  };

  const clearCart = async () => {
    if (user) {
      const cartRef = doc(db, "carts", user.uid);
      await updateDoc(cartRef, {
        items: [],
      });
    }
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};