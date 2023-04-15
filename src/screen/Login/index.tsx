/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/index';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <Input label="Nome" placeholder="Primeiro nome" error="Error" />
      <Button
        title="Entrar"
        buttonType="primary"
        onClick={() => console.log('entrar')}
      />
      <Button
        title="Sair"
        buttonType="secondary"
        onClick={() => console.log('sair')}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
