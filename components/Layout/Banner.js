import { AuthContext } from "@/context/AuthContext";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { db } from "@/firebase/config";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Logo from "../Logo";
import { RiAccountCircleLine } from "react-icons/ri";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/router";

export function Banner() {
 const { user } = useContext(AuthContext);
 const { cartItems } = useContext(ShoppingCartContext);
 const [userData, setUserData] = useState(null);
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 const [isAccountHovered, setIsAccountHovered] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");
 const router = useRouter();

 useEffect(() => {
   if (user) {
     const userRef = doc(db, "users", user.uid);
     getDoc(userRef).then((doc) => {
       if (doc.exists) {
         setUserData(doc.data());
       }
     });
   }
 }, [user]);

 const toggleDrawer = (open) => (event) => {
   setIsDrawerOpen(open);
 };

 const handleAccountHover = () => {
   setIsAccountHovered(!isAccountHovered);
 };

 const handleSearch = (e) => {
   setSearchQuery(e.target.value);
   router.push(`/search?q=${e.target.value}`);
 };

 return (
   <div className="sticky top-0 bg-white z-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between py-4">
         <div className="flex items-center md:hidden">
           <FiMenu className="h-6 w-6 text-gray-500 mr-2" />
           <Link href="/">
             <Logo className="h-8 w-8 text-gray-500" />
           </Link>
         </div>
         <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
           <Link href="/">
             <Logo className="h-8 w-8 text-gray-500" />
           </Link>
         </div>
         <div className="flex items-center">
           <div className="hidden md:flex items-center space-x-4">
             <input
               className="rounded-l-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
               type="text"
               placeholder="What can we help you find?"
               value={searchQuery}
               onChange={handleSearch}
             />
             <button className="bg-white rounded-r-md px-4 py-2 border border-gray-300 hover:bg-gray-100">
               <FiSearch className="h-5 w-5 text-gray-500" />
             </button>
           </div>
         </div>
         <div className="flex items-center space-x-4">
           {user && (
             <div
               className="flex items-center cursor-pointer sm:mr-4"
               onClick={toggleDrawer(true)}
               onMouseEnter={handleAccountHover}
               onMouseLeave={handleAccountHover}
             >
               <RiAccountCircleLine className="w-6 h-6 text-gray-500" />
               <span className="hidden sm:block text-gray-500 text-sm mr-1">
                 Hi, {user.email}
               </span>
               {isAccountHovered && <FaChevronDown className="w-3 h-3 text-gray-500" />}
             </div>
           )}
           <Link href="/cart" className="relative flex items-center">
             <svg viewBox="0 0 32 32" width="24px" className="text-gray-500">
               <image
                 height="100%"
                 href="https://www.target.com/icons/assets/glyph/Cart.svg#Cart"
                 width="100%"
               ></image>
             </svg>
             {cartItems.length > 0 && (
               <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                 {cartItems.length}
               </span>
             )}
           </Link>
         </div>
         <Drawer
           anchor="right"
           open={isDrawerOpen}
           onClose={toggleDrawer(false)}
         >
           <div className="p-4 flex flex-col h-full">
             <div className="flex justify-between items-center mb-4">
               <h2 className="text-lg font-bold">Account</h2>
               <IconButton onClick={toggleDrawer(false)}>
                 <FiX />
               </IconButton>
             </div>
             {user ? (
               <List>
                 <ListItem>
                   <ListItemText
                     primary={`Hi, ${user.email}`}
                     secondary="Account"
                   />
                 </ListItem>
                 <ListItem button component={Link} href="/orders">
                   <ListItemText primary="Orders" />
                 </ListItem>
                 <ListItem button component={Link} href="/gift-cards">
                   <ListItemText primary="Gift Cards" />
                 </ListItem>
                 <ListItem button component={Link} href="/registry">
                   <ListItemText primary="Registry" />
                 </ListItem>
                 <ListItem button component={Link} href="/signin">
                   <ListItemText primary="Sign Out" />
                 </ListItem>
               </List>
             ) : (
               <List>
                 <ListItem button component={Link} href="/signin">
                   <ListItemText primary="Sign In" />
                 </ListItem>
                 <ListItem button component={Link} href="/signup">
                   <ListItemText primary="Create Account" />
                 </ListItem>
               </List>
             )}
           </div>
         </Drawer>
       </div>
       <div className="md:hidden mt-3">
         <div className="flex items-center bg-white px-3 py-1.5 rounded-md w-full">
           <FiSearch className="mr-2 text-gray-500" />
           <input
             className="outline-none border-none flex-grow text-gray-500"
             placeholder="What can we help you find?"
             type="text"
             value={searchQuery}
             onChange={handleSearch}
           />
         </div>
       </div>
     </div>
   </div>
 );
}