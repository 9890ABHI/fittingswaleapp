import axios from "axios";
import { testURL } from "../assets/Constants/helper";

// actions 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const Empty_CART = 'Empty_CART';
export const INCREASE_CART_ITEM_VALUE = 'INCREASE_CART_ITEM_VALUE'
export const DECREASE_CART_ITEM_VALUE = 'DECREASE_CART_ITEM_VALUE'



export const Init = () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("access");
      const user = localStorage.getItem("user");
      dispatch({
        type: LOGIN,
        payload: {
          access: token,
          user: JSON.parse(user),
        },
      })
    }
    catch {
      dispatch({
        type: 'LOGIN',
        payload: {
          access: null,
          user: null,
        },
      })
    }
  }
}
export const loginAction = (credentials) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(testURL + 'login/', credentials);
      console.log('====================================');
      console.log('sucessfull' , res.data);
      console.log('====================================');

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          access: res.data.access,
          user: res.data.user,
        },
      });

      console.log('====================================');
      console.log('sucessfull');
      console.log('====================================');
      
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          error: error.response ? error.response.data : 'Login failed',
        },
      });
      // setLoading(false);
      console.log('Login error',error);
      console.log('====================================');
      console.log('Error');
      console.log('====================================');
    }
  };
};

export const RegisterAction = (setLoading, data) => {
  return async dispatch => {
    try {
      setLoading(true);
      console.log('====================================');
      console.log(data );
      console.log('====================================');
      const res = await axios.post(testURL + 'register/', data);
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      dispatch({
        type: REGISTER,
        payload: {
          access: res.data.access,
          user: res.data.user,
        },
      })
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Register error',error);
    }
  }
}

// export const loginAction = async (setLoading, data) => {
//   try {
//     setLoading(true);
//     const res = await axios.post(testURL + 'login/', data);
//     console.log('====================================');
//     console.log(res);
//     console.log('====================================');

//     dispatch({
//       type: LOGIN,
//       payload: {
//         access: res.data.access,
//         user: res.data.user,
//       },
//     });

//     setLoading(false);
//   } catch (error) {
//     setLoading(false);
//     console.error('Login failed:', error);
//   }
// };

export const LogoutAction = () => {
  return async dispatch => {
    localStorage.clear();
    dispatch({
      type: LOGOUT,
      payload: null,
    })
  }
}


export const addToCart = (product) => ({ type: 'ADD_TO_CART', payload: product });
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
export const emptyCart = () => ({
  type: Empty_CART,
});

export const increaseCartItemValue = (productId) => ({
  type: INCREASE_CART_ITEM_VALUE,
  payload: productId,
});
export const decreaseCartItemValue = (productId) => ({
  type: DECREASE_CART_ITEM_VALUE,
  payload: productId,
});