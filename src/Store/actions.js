// import axios from 'axios';
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
// export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGOUT = "LOGOUT";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";


import axios from "axios";
import { testURL } from "../assets/Constants/helper";
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
  return async dispatch => {
    try {
      const res = await axios.post(testURL + 'login/', {
        username :"abhiasd",
        password:'12341234'
      });

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
      console.log(data);
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


export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
};