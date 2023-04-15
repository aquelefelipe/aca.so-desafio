/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

interface ButtonProps {
  buttonType: 'primary' | 'secondary';
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonStyle {
  buttonType: string;
}

const Button = ({ title, buttonType, onClick }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} buttonType={buttonType}>
      {title}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<ButtonStyle>`
  background-color: ${({ buttonType, theme }) =>
    buttonType === 'primary' ? theme.white : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ buttonType, theme }) =>
    buttonType === 'primary' ? theme.black : theme.white};
  padding: 10px 20px;
  border: none;
  border-radius: 30.5px;
  font-size: 16px;

  :active {
    opacity: 0.5;
  }
`;

export default Button;
