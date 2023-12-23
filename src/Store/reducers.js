// import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./actions";

import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  ADD_TO_CART,
  DECREASE_CART_ITEM_VALUE,
  INCREASE_CART_ITEM_VALUE,
  REMOVE_FROM_CART,
  Empty_CART,
} from './actions';

// const initialState = {
//   access: null,
//   user: null,
//   error: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGNUP_SUCCESS:
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         access: action.payload.access,
//         user: action.payload.user,
//         error: null,
//       };

//     case SIGNUP_FAILURE:
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         access: null,
//         user: null,
//         error: action.payload.error,
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         access: null,
//         user: null,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

const initialState = {
  access: null,
  user: null,
  error: null,
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: action.payload.access,
        user: action.payload.user,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        access: null,
        user: null,
        error: action.payload.error,
      };
    case LOGIN:
      return {
        ...state,
        access: action.payload.access,
        user: action.payload.user,
      };
    case REGISTER:
      return {
        ...state,
        access: action.payload.access,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        access: action.payload,
      };

    case ADD_TO_CART:
      const existingProduct = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === existingProduct.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case Empty_CART:
      return {
        ...state,
        cart: [],
      };

    case INCREASE_CART_ITEM_VALUE:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };

    case DECREASE_CART_ITEM_VALUE:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      };

    default:
      return state;
  }
};
