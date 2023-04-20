import React, { createContext, useContext, useReducer } from 'react';

interface User {
  id?: string;
  created_at?: string;
  updated_at?: string;
  email: string;
  first_name: string;
  last_name: string;
  nickname?: string;
  bio?: string;
  birthday?: string;
  children_qty?: number;
  civil_state?: string;
  instagram?: string;
  whats_app?: string;
  linkedin?: string;
  city_current_id?: string;
  city_born_at_id?: string;
  state_current_id?: string;
  state_born_at_id?: string;
  company_id?: string;
  occupation_id?: string;
  work_field_id?: string;
  skills_want?: string[];
  skills_can?: string[];
  hobbies?: string[];
  onboard_complete?: boolean;
  last_access_at?: string;
  group?: string[];
  spotify?: {
    display_name?: string;
    top_artist?: {
      id?: string;
      name?: string;
      url?: string;
      genres?: string[];
    };
    top_genre?: string;
    most_recent_saved_show?: {
      id?: string;
      name?: string;
      url?: string;
    };
  };
  badge?: string;
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
  // USER
  USER_START: 'USER_START',
  USER_SUCCESS: 'USER_SUCCESS',
  USER_ERROR: 'USER_ERROR',
  // CREATE USER
  CREATE_USER_START: 'CREATE_USER_START',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',
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

    case ActionType.USER_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ActionType.USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      };

    case ActionType.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case ActionType.CREATE_USER_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ActionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case ActionType.CREATE_USER_ERROR:
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
