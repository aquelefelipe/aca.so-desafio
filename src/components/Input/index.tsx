/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { InputProps } from '../../Interfaces';

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  // isVisible,
  type = 'text',
  error,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type);

  const handleInputVisibility = () => {
    setIsVisible((oldState) => !oldState);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <InputContainer>
      {label && <InputTitle>{label}</InputTitle>}
      <InputContainerWithButton>
        <InputStyle
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={inputType}
        />
        {type === 'password' && (
          <IconContainer onClick={handleInputVisibility}>
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
  width: 100%;
`;

const InputContainerWithButton = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    max-width: 481px;
  }
`;

const InputStyle = styled.input`
  width: 90%;
  max-width: 481px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.darkGray};
  padding: 16px 12px;
  margin: 8px 0px;
  color: ${({ theme }) => theme.white};

  ::placeholder {
    color: ${(props) => props.theme.ligthGray};
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const IconContainer = styled.span`
  position: absolute;
  bottom: 12px;
  right: 20px;
  padding: 8px;
  border: none;
  /* background-color: red; */

  svg {
    color: #fff;
  }

  @media (min-width: 768px) {
    right: 0px;
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
