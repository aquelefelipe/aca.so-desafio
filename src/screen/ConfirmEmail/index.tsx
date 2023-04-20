/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';

import useWindowDimensions from '../../hooks/dimensions';
import useAuth from '../../requests/auth';

import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Acaso from '../../images/acaso.png';

const ConfirmEmail: React.FC = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const { confirmSignUpPOSTRequest } = useAuth();

  const { email } = location.state();

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: yup.object({
      code: yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) =>
      confirmSignUpPOSTRequest({
        email,
        confirmation_code: values.code,
      }),
  });

  return (
    <Wrapper>
      <Container>
        <Image src={Acaso} />
        <Title>
          {width < 768
            ? `Confirmar \n email`
            : ` C O N F I R M A R \n  E M A I L`}
        </Title>
        <Input
          id="code"
          label="Código"
          onChange={formik.handleChange}
          placeholder="Digite o código recebido"
          value={formik.values.code}
          error={!!formik.errors.code}
          errorMessagem={formik.errors.code}
        />
        <ButtonsContainer>
          <Button
            title="Confirmar e-mail"
            buttonType="primary"
            onClick={formik.handleSubmit}
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

const Image = styled.img`
  width: 120px;
  object-fit: contain;
  margin-bottom: 80px;
`;

export default ConfirmEmail;
