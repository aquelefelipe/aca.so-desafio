import React from "react";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  type?: string;
  isVisible?: boolean;
  error?: string;
}
