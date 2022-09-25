import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PurchasesContext } from "./App";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const AppRouter = () => {

  const { state } = useContext(PurchasesContext);
  <Navigate to="/" />

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default AppRouter;