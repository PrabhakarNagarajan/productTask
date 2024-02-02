import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../API/api";
import { addToCart } from "../redux/action";
import { Link } from "react-router-dom";
const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart, "see here");
  // const [product, setProductList] = useState([]);
  // useEffect(() => {
  //   getAllProducts().then((response) => {
  //     setProductList(response);
  //   });

  //   dispatch({ type: "SET_PRODUCTS", payload: product && product });
  // }, []);
  const product = [
    { id: "1", name: "Product A", price: 19.99, quantity: 10 },
    { id: "2", name: "Product B", price: 29.99, quantity: 15 },
    { id: "3", name: "Product C", price: 24.99, quantity: 12 },
    { id: "4", name: "Product D", price: 14.99, quantity: 8 },
    { id: "5", name: "Product E", price: 39.99, quantity: 20 },
    { id: "6", name: "Product F", price: 9.99, quantity: 5 },
    { id: "7", name: "Product G", price: 49.99, quantity: 18 },
    { id: "8", name: "Product H", price: 34.99, quantity: 14 },
    { id: "9", name: "Product I", price: 17.99, quantity: 7 },
    { id: "10", name: "Product J", price: 23.99, quantity: 11 },
    { id: "11", name: "Product K", price: 15.99, quantity: 9 },
    { id: "12", name: "Product L", price: 27.99, quantity: 16 },
    { id: "13", name: "Product M", price: 21.99, quantity: 13 },
    { id: "14", name: "Product N", price: 11.99, quantity: 6 },
    { id: "15", name: "Product O", price: 31.99, quantity: 17 },
    { id: "16", name: "Product P", price: 37.99, quantity: 19 },
    { id: "17", name: "Product Q", price: 12.99, quantity: 8 },
    { id: "18", name: "Product R", price: 43.99, quantity: 22 },
    { id: "19", name: "Product S", price: 28.99, quantity: 15 },
    { id: "20", name: "Product T", price: 16.99, quantity: 10 },
    { id: "21", name: "Product U", price: 22.99, quantity: 11 },
    { id: "22", name: "Product V", price: 18.99, quantity: 14 },
    { id: "23", name: "Product W", price: 33.99, quantity: 16 },
    { id: "24", name: "Product X", price: 14.49, quantity: 9 },
    { id: "25", name: "Product Y", price: 26.99, quantity: 12 },
    { id: "26", name: "Product Z", price: 19.49, quantity: 7 },
    { id: "27", name: "Product AA", price: 23.49, quantity: 11 },
    { id: "28", name: "Product BB", price: 38.99, quantity: 14 },
    { id: "29", name: "Product CC", price: 44.99, quantity: 18 },
    { id: "30", name: "Product DD", price: 20.49, quantity: 10 },
  ];

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  console.log(product, "see here");
  return (
    <div>
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
      <div className="grid grid-cols-3 gap-4">
        {product &&
          product?.map((product) => (
            <div key={product.id} className="p-4 border border-gray-300">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
              <button
                className="mt-2 bg-blue-500 text-white p-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
