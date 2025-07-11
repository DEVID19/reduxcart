import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="flex  items-center justify-between px-8  py-4  shadow-md  text-center">
      <h1 className="font-bold text-2xl text-center ">ReduxCart</h1>
      <ul className="flex items-center gap-4 sm:mr-20 mr-2 ">
        <li className="font-semibold text-lg ">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold text-lg relative">
          <Link to="/cart">
            <ShoppingCart size={28} />
            {totalQuantity > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
