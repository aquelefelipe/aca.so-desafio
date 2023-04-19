/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';

import useWindowDimensions from '../../hooks/dimensions';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ConfirmEmail: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper>
      <Container>
        <Title>
          {width < 768
            ? `Confirmar \n email`
            : ` C O N F I R M A R \n  E M A I L`}
        </Title>
        <Input
          id="code"
          label="Código"
          // onChange={formik.handleChange}
          placeholder="Digite o código recebido"
          // value={formik.values.email}
          // error={!!formik.errors.email}
          // errorMessagem={formik.errors.email}
        />
        <ButtonsContainer>
          <Button
            title="Confirmar e-mail"
            buttonType="primary"
            onClick={() => {}}
          />
          <Text>Não recebeu o código?</Text>
          <Button
            title="Aguarde XXX para reenviar..."
            buttonType="secondary"
            onClick={() => {}}
          />
        </ButtonsContainer>
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

  white-space: pre-line;

  color: ${({ theme }) => theme.white};
  margin-bottom: 50px;
`;

const Text = styled.span`
  width: 100%;
  text-align: center;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: ${({ theme }) => theme.white};
  margin: 25px 0px 10px 0px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 328px;
  }
`;
export default ConfirmEmail;
