/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useWindowDimensions from '../../hooks/dimensions';
import { RouteNames } from '../../router';

import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Email inválido').required('Campo obrigatório'),
      first_name: yup.string().required('Campo obrigatório'),
      last_name: yup.string().required('Campo obrigatório'),
      password: yup
        .string()
        .required('Campo obrigatório')
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          'A senha deve conter pelo menos uma letra e um número'
        ),
      confirm_password: yup
        .string()
        .required('Campo obrigatório')
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          'A senha deve conter pelo menos uma letra e um número'
        )
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
    }),
    onSubmit: (values) => console.log(values),
    validateOnChange: false,
  });

  const handleRedirect = (route: string) => {
    navigate(route);
  };

  return (
    <Wrapper>
      <Container>
        <Title>{width >= 768 ? 'C A D A S T R O' : 'Cadastro'}</Title>
        <div style={{ width: '100%', marginTop: '50px' }}>
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
            id="first_name"
            label="Primeiro nome"
            onChange={formik.handleChange}
            placeholder=""
            value={formik.values.first_name}
            error={!!formik.errors.first_name}
            errorMessagem={formik.errors.first_name}
          />
          <Input
            id="last_name"
            label="Último nome"
            onChange={formik.handleChange}
            placeholder=""
            value={formik.values.last_name}
            error={!!formik.errors.last_name}
            errorMessagem={formik.errors.last_name}
          />
          <Input
            id="password"
            label="Senha*"
            onChange={formik.handleChange}
            placeholder="abcd@123"
            value={formik.values.password}
            error={!!formik.errors.password}
            errorMessagem={formik.errors.password}
            type="password"
          />
          <Input
            id="confirm_password"
            label="Confirmar sua senha*"
            onChange={formik.handleChange}
            placeholder="abcd@123"
            value={formik.values.confirm_password}
            error={!!formik.errors.confirm_password}
            errorMessagem={formik.errors.confirm_password}
            type="password"
          />
        </div>
        <div style={{ width: '100%', marginBottom: '25px' }}>
          <Button
            title="Criar uma conta em aca.so"
            buttonType="primary"
            onClick={formik.handleSubmit}
          />
        </div>
        <Button
          title="Voltar para login"
          buttonType="secondary"
          onClick={() => handleRedirect(RouteNames.LOGIN)}
        />
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
