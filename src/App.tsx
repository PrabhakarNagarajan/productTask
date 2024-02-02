import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import store from "./redux/store";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function NaviagationBar() {
  return (
    <>
      <div className=" mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NaviagationBar />} />
        <Route index element={<ProductList />} />
        <Route path="cart" element={<Cart />} />

        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
