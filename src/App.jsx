import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { calculateTotal } from "./app/cartSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal()); // ✅ recalculates totals after refresh
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
