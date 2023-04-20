import { api } from './index';
import { ActionType, useStoreDispatch, useStoreState } from '../store';
import { URLRequest } from '../config/constants';

interface RequestUserInfo {
  userId: string;
}

const useUser = () => {
  const state = useStoreState();
  const dispatch = useStoreDispatch();

  const userPOSTRequest = async () => {
    dispatch({ type: ActionType.CREATE_USER_SUCCESS });
    try {
      const response = await api.request({
        method: 'POST',
        url: URLRequest.CREATE_USER,
        data: {},
      });
      if (response.status === 200) {
        dispatch({ type: ActionType.CREATE_USER_SUCCESS });
      }
    } catch (error) {
      dispatch({ type: ActionType.CREATE_USER_ERROR });
    }
  };

  const userInfoGETRequest = async ({ userId }: RequestUserInfo) => {
    dispatch({ type: ActionType.USER_START });
    try {
      const response = await api.request({
        method: 'GET',
        url: URLRequest.USER_INFO(userId),
        data: {},
      });
      if (response.status === 200) {
        dispatch({ type: ActionType.USER_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: ActionType.USER_ERROR });
    }
  };

  return { state, userPOSTRequest, userInfoGETRequest };
};

export default useUser;
