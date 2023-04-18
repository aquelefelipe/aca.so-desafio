/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  type?: string;
  isVisible?: boolean;
  error?: boolean;
  errorMessagem?: string;
}

const Input = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  // isVisible,
  type = 'text',
  error = false,
  errorMessagem,
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
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={inputType}
          error={error}
        />
        {type === 'password' && (
          <IconContainer onClick={handleInputVisibility}>
            {isVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
          </IconContainer>
        )}
      </InputContainerWithButton>
      {error && <ErrorFeedback>{errorMessagem}</ErrorFeedback>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 25px;
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

type InputStyleProps = {
  error: boolean;
};

const InputStyle = styled.input<InputStyleProps>`
  width: 90%;
  max-width: 481px;
  border-radius: 6px;
  border: ${({ error, theme }) =>
    error ? `2px solid ${theme.error}` : 'none'};
  background-color: ${(props) => props.theme.darkGray};
  padding: 16px 12px;
  margin: 8px 0px;
  color: ${({ theme }) => theme.white};

  ::placeholder {
    color: ${(props) => props.theme.ligthGray};
  }

  :focus {
    outline: none;
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
