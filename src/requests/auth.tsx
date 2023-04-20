/* eslint-disable camelcase */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { api, URLRequest } from './index';
import { useStoreState, useStoreDispatch, ActionType } from '../store';
import { RouteNames } from '../router';

interface AuthSignUp {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  auth_token?: string;
}

interface AuthLogin {
  email: string;
  password: string;
}

interface AuthConfirmSignUpe {
  email: string;
  confirmation_code: string;
}

const useAuth = () => {
  const state = useStoreState();
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();

  const signUpPOSTRequest = async ({
    email,
    first_name,
    last_name,
    password,
    auth_token,
  }: AuthSignUp) => {
    dispatch({ type: ActionType.SIGNUP_START });
    try {
      const response = await api.request({
        method: 'POST',
        url: URLRequest.SIGN_UP,
        data: { email, first_name, last_name, password, auth_token },
      });
      if (response.status === 200) {
        console.log('response: ', response.data);
        navigate(RouteNames.CONFIRM_EMAIL, { state: { email } });
        dispatch({ type: ActionType.SIGNUP_SUCCESS, payload: 'SUCESSO' });
      }
    } catch (error) {
      dispatch({ type: ActionType.SIGNUP_ERROR });
    }
  };

  const loginPOSTRequest = async ({ email, password }: AuthLogin) => {
    dispatch({ type: ActionType.LOGIN_START });
    try {
      const response = await api.request({
        method: 'POST',
        url: URLRequest.LOGIN,
        data: { email, password },
      });
      if (response.status === 200) {
        dispatch({ type: ActionType.LOGIN_SUCCESS });
        navigate(RouteNames.HOME);
        console.log('LOGIN RESPONSE: ', response.data);
      }
    } catch (error) {
      dispatch({ type: ActionType.LOGIN_ERROR });
      console.log('LOGIN ERROR: ', error);
    }
  };

  const confirmSignUpPOSTRequest = async ({
    email,
    confirmation_code,
  }: AuthConfirmSignUpe) => {
    dispatch({ type: ActionType.CONFIRM_EMAIL_START });
    try {
      const response = await api.request({
        method: 'POST',
        url: URLRequest.CONFIRM_EMAIL,
        data: { email, confirmation_code },
      });
      if (response.status === 200) {
        dispatch({ type: ActionType.CONFIRM_EMAIL_SUCCESS, payload: true });
        navigate(RouteNames.HOME);
        console.log('CONFIRM EMAIL RESPONSE: ', response.data);
      }
    } catch (error) {
      dispatch({ type: ActionType.CONFIRM_EMAIL_ERROR });
      console.log('CONFIRM EMAIL ERROR: ', error);
    }
  };

  return {
    state,
    signUpPOSTRequest,
    loginPOSTRequest,
    confirmSignUpPOSTRequest,
  };
};

export default useAuth;
