import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Home, Login, Register, SignUp } from "./components";
import { Dashboard } from "./components/Dashboard";
import { commerce } from "./lib/commerce";
import { Products, Cart } from "./components/Dashboard";

const Router = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleAddCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/bibit">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} handleAddCartQty={handleAddCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/PohonKu" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
