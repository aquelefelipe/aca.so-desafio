/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/index';
import Button from '../../components/Button';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <div style={{ width: '100%', marginTop: '50px' }}>
          <Input
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            value={email}
          />
        </div>
        <div style={{ width: '100%', margin: '25px 0px' }}>
          <Input
            label="Senha"
            onChange={(e) => setPass(e.target.value)}
            placeholder="abcd@1234"
            value={pass}
            type="password"
          />
        </div>
        <Button buttonType="primary" title="Entrar" onClick={() => {}} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: '25px 0px',
          }}
        >
          <CallToAction>Não posui conta na acaso?</CallToAction>
          <Button
            title="Criar um conta"
            buttonType="secondary"
            onClick={() => {}}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px;
`;

const Title = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: ${({ theme }) => theme.white};
`;

const CallToAction = styled.span`
  width: 100%;
  text-align: center;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 10px;
`;

export default Login;
