import React from 'react';
import { useRouter } from 'next/router'

import { ButtonWrapper } from './styles';

const Button = ({ children, onClick }) => {
  const router = useRouter()
  return (
    <ButtonWrapper onClick={onClick}>
      { children }
    </ButtonWrapper>
  );
}

export default Button;