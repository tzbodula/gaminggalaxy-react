import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.js";
import GalaxyMerch from "./screens/galaxymerch"
import ProductScreen from "./screens/productscreen"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./Store.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/Login.js";
import ErrorBoundary from "./react-components/ErrorBoundary.js"

console.log("Index Got Called!");

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<LoginScreen />} />
              <Route path="/galaxymerch" element={<GalaxyMerch />}></Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
