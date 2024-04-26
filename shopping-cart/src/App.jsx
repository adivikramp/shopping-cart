import ProductPage from "./pages/ProductPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<ProductPage />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default App;
