import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (form, history) => async (dispatch) => {
  try {
    //   *this will login the user
    const { data } = await api.signIn(form);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, hisotry) => async (dispatch) => {
  try {
    const { data } = await api.signUp(form);

    dispatch({ type: AUTH, data });

    hisotry.push('/');
  } catch (error) {
    console.log(error);
  }
};
