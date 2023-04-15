/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { InputProps } from '../../Interfaces';

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  isVisible,
  type,
  error,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      {label && <InputTitle>{label}</InputTitle>}
      <InputContainerWithButton>
        <InputStyle
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <IconContainer>
            {isVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
          </IconContainer>
        )}
      </InputContainerWithButton>
      {error && <ErrorFeedback>Senhas não coincidem </ErrorFeedback>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputContainerWithButton = styled.div`
  position: relative;
`;

const InputStyle = styled.input`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.darkGray};
  padding: 16px 12px;
  margin: 8px 0px;
  color: ${({ theme }) => theme.white};

  ::placeholder {
    color: ${(props) => props.theme.ligthGray};
  }
`;

const IconContainer = styled.span`
  position: absolute;
  bottom: 12px;
  right: 0;
  padding: 8px;
  border: none;
  /* background-color: red; */

  svg {
    color: #fff;
  }
`;

const InputTitle = styled.span`
  color: ${({ theme }) => theme.ligthGray};
  font-size: 16px;
  font-family: 'Raleway';
  font-weight: 500;
  margin-left: 16px;
`;

const ErrorFeedback = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  font-family: 'Raleway';
  font-weight: 700;
  margin-left: 16px;
`;

export default Input;
