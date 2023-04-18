/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useWindowDimensions from '../../hooks/dimensions';

import Input from '../../components/Input/index';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const { width } = useWindowDimensions();

  return (
    <Wrapper>
      <Container>
        <Title>{width >= 768 ? 'L O G I N' : 'Login'}</Title>

        <Input
          label="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          value={email}
        />

        <Input
          label="Senha"
          onChange={(e) => setPass(e.target.value)}
          placeholder="abcd@1234"
          value={pass}
          type="password"
        />

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
          <Link style={{ width: '100%' }} to="cadastro">
            <Button
              title="Criar um conta"
              buttonType="secondary"
              onClick={() => {}}
            />
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 50px;
  max-width: 500px;
`;

const Title = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    font-size: 50px;
  }
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
