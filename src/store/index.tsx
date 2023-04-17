import React, { createContext, useContext, useReducer } from 'react';

interface State {
  data: any;
  loading: boolean;
  error: boolean;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_ERROR' };

type Dispatch = (action: Action) => void;

const InitialState: State = {
  data: null,
  loading: false,
  error: false,
};

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: false,
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case 'FETCH_ERROR':
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

export { StoreProvider, useStoreDispatch, useStoreState };
