/* eslint-disable camelcase */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from './index';
import { useStoreState, useStoreDispatch, ActionType } from '../store';
import { RouteNames } from '../router';
import {
  URLRequest,
  handleStorageAccessToken,
  handleStorageIdToken,
  handleStorageRefreshToken,
} from '../config/constants';

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
        navigate(RouteNames.CONFIRM_EMAIL, { state: { email } });
        dispatch({
          type: ActionType.SIGNUP_SUCCESS,
        });
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
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: response.data.user,
        });
        handleStorageAccessToken(response.data.token.access_token);
        handleStorageRefreshToken(response.data.token.refresh_token);
        handleStorageIdToken(response.data.token.id_token);
        navigate(RouteNames.HOME);
      }
    } catch (error) {
      dispatch({ type: ActionType.LOGIN_ERROR });
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
      }
    } catch (error) {
      dispatch({ type: ActionType.CONFIRM_EMAIL_ERROR });
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
