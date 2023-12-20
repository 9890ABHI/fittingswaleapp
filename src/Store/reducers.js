// import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./actions";

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER } from "./actions";

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
  error:null,
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

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
