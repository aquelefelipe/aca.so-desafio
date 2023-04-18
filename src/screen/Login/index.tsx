/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useWindowDimensions from '../../hooks/dimensions';

import Input from '../../components/Input/index';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

const Login = () => {
  const { width } = useWindowDimensions();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().required('Campo obrigatório'),
      password: yup
        .string()
        .required('Campo obrigatório')
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          'A senha deve conter pelo menos uma letra e um número'
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: false,
  });

  return (
    <Wrapper>
      <Container>
        <Title>{width >= 768 ? 'L O G I N' : 'Login'}</Title>

        <Input
          id="email"
          label="E-mail"
          onChange={formik.handleChange}
          placeholder="seu@email.com"
          value={formik.values.email}
          error={!!formik.errors.email}
          errorMessagem={formik.errors.email}
        />

        <Input
          id="password"
          label="Senha"
          onChange={formik.handleChange}
          placeholder="abcd@1234"
          value={formik.values.password}
          type="password"
          error={!!formik.errors.password}
          errorMessagem={formik.errors.password}
        />

        <Button
          buttonType="primary"
          title="Entrar"
          onClick={formik.handleSubmit}
        />
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
