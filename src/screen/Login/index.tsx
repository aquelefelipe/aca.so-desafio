/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/index';

const Login = () => {
  return (
    <Container>
      <Input label="Nome" placeholder="Primeiro nome" error="Error" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
