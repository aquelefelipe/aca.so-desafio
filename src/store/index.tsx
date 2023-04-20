import React, { createContext, useContext, useReducer } from 'react';

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  onboard_complete: string;
  group: string[];
}
interface State {
  data?: any;
  loading: boolean;
  error: boolean;
  user?: User;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

const ActionType = {
  // SIGN UP
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
  // LOGIN
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  // CONFIRM EMAIL
  CONFIRM_EMAIL_START: 'CONFIRM_EMAIL_START',
  CONFIRM_EMAIL_SUCCESS: 'CONFIRM_EMAIL_SUCCESS',
  CONFIRM_EMAIL_ERROR: 'CONFIRM_EMAIL_ERROR',
};

type Action = { type: string; payload?: any };

type Dispatch = (action: Action) => void;

const InitialState: State = {
  data: null,
  loading: false,
  error: false,
  user: undefined,
};

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ActionType.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case ActionType.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case ActionType.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      };

    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case ActionType.CONFIRM_EMAIL_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ActionType.CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case ActionType.CONFIRM_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useStoreState = () => {
  const state = useContext(StateContext);

  if (!state) {
    throw new Error('useStoreState deve ser usado dentro do StoreProvider');
  }

  return state;
};

const useStoreDispatch = () => {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) {
    throw new Error(
      'useStoreDispatch deve ser usado dentro de um StoreProvider'
    );
  }

  return dispatch;
};

export { StoreProvider, useStoreDispatch, useStoreState, ActionType };
