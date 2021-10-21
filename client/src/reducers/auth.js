import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      console.log('this is the actionType.AUTH of action.data in reducers/auth.js:',action?.data)

      // *we aer setting all the data for the login in local storage
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data};
      // return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      // localStorage.clear();

      // return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
