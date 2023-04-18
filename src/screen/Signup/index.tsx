/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useWindowDimensions from '../../hooks/dimensions';

import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';

// import { Container } from './styles';

const Signup: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <Container>
        <Title>{width >= 768 ? 'C A D A S T R O' : 'Cadastro'}</Title>
        <div style={{ width: '100%', marginTop: '50px' }}>
          <Input label="E-mail" onChange={() => {}} placeholder="" value="" />
          <Input
            label="Primeiro nome"
            onChange={() => {}}
            placeholder=""
            value=""
          />
          <Input
            label="Último nome"
            onChange={() => {}}
            placeholder=""
            value=""
          />
          <Input label="Senha*" onChange={() => {}} placeholder="" value="" />
          <Input
            label="Confirmar sua senha*"
            onChange={() => {}}
            placeholder=""
            value=""
          />
        </div>
        <div style={{ width: '100%', marginBottom: '25px' }}>
          <Button
            title="Criar uma conta em aca.so"
            buttonType="primary"
            onClick={() => {}}
          />
        </div>
        <Link to="/" style={{ width: '100%' }}>
          <Button
            title="Voltar para login"
            buttonType="secondary"
            onClick={() => {}}
          />
        </Link>
      </Container>
    </Wrapper>
  );
};

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 50px;
  max-width: 500px;
`;

export default Signup;
