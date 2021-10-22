import {AUTH, LOGOUT} from '../constants/actionTypes'

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log('this is the actionType.AUTH of action.data in reducers/auth.js:',action?.data)
      
      // *we are setting all the data for the login in local storage      
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      
      return { ...state, authData: action?.data};
      // return { ...state, authData: action.data, loading: false, errors: null };
    
    default:
      return state;
  }
};

export default authReducer;




// const authReducer = (state = { authData: null }, action) => {
//   switch (action.type) {
//     case AUTH:
//       console.log('this is the actionType.AUTH of action.data in reducers/auth.js:',action?.data)
//       return state

//       // *we aer setting all the data for the login in local storage
//       // localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
//       // return { ...state, authData: action?.data};
//       // return { ...state, authData: action.data, loading: false, errors: null };
//     // case LOGOUT:
//       // localStorage.clear();

//       // return { ...state, authData: null, loading: false, errors: null };
//     default:
//       return state;
//   }
// };

// export default authReducer;
