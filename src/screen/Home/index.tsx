import React from 'react';

import useAuth from '../../requests/auth';
// import { Container } from './styles';

const Home: React.FC = () => {
  const { state } = useAuth();
  console.log('User: ', state.user);
  return <div>HOME</div>;
};

export default Home;
