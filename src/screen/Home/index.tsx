/* eslint-disable no-extra-boolean-cast */
import React, { useEffect } from 'react';

import useUser from '../../requests/user';

const Home: React.FC = () => {
  const { state, userInfoGETRequest, userPOSTRequest } = useUser();

  useEffect(() => {
    userPOSTRequest();
    if (state.user && state.user.id) {
      userInfoGETRequest({ userId: state.user?.id });
    }
  }, [state.user]);

  return <div>HOME</div>;
};

export default Home;
