const initialState = {
  products: [],
  cart: [],
};
// import { useSelector } from "react-redux";

// const cart = useSelector((state) => state.cart);
const rootReducer = (state = { products: [], cart: [] }, action) => {
  console.log(action);
  console.log(action.cart);
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
