import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router'

import Menu from '../menu';
import { HeaderWrapper } from './styles';

const Header = () => {
  const router = useRouter()
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpened(false)
  }, [])

  return (
    <HeaderWrapper>
      <div onClick={() => router.push('/')} className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
      <svg onClick={() => setIsOpened(true)} width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 2H37.5M0 13.04H37.5M10.5 25H37.5" stroke="white" strokeWidth="3"/>
      </svg>
      <Menu isOpened={isOpened} handleClose={handleClose} />
    </HeaderWrapper>
  );
}

export default Header;