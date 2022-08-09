import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { commerce } from "./Lib/Commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const Cart = await commerce.cart.retrieve();
    setCart(Cart);
  };

  const addToCartHandler = async (productID, qte) => {
    const Cart = await commerce.cart.add(productID, qte);
    setCart(Cart);
  };

  const updateCartQteHandler = async (productID, qte) => {
    const Cart = await commerce.cart.update(productID, { quantity: qte });
    setCart(Cart);
  };

  const removeFromCartHandler = async (productID) => {
    const Cart = await commerce.cart.remove(productID);
    setCart(Cart);
  };

  const emptyCartHandler = async () => {
    const Cart = await commerce.cart.empty();
    setCart(Cart);
  };

  const refreshOrder = async () => {
    setCart(await commerce.cart.refresh());
  };

  const handleCaptureCheckout = async (checkoutTokenID, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenID,
        newOrder
      );
      setOrder(incomingOrder);
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar count={cart.total_items ?? 0} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products products={products} onAddToCart={addToCartHandler} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              onEmptyCart={emptyCartHandler}
              onRemoveFromCart={removeFromCartHandler}
              onUpdateCartQte={updateCartQteHandler}
              cart={cart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              order={order}
              error={errorMessage}
              onCaputreCheckout={handleCaptureCheckout}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
