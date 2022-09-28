import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";

const AppRouter = () => {

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