import React from 'react';
import { useRouter } from 'next/router'

import { MenuWrapper, MenuContent } from './styles';

const Menu = ({ isOpened, handleClose }) => {
  const router = useRouter()

  return (
    <MenuWrapper onClick={handleClose} isOpened={isOpened}>
      <MenuContent isOpened={isOpened}>
        <div className="menu-header">
          <svg onClick={handleClose} width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L30 29M2 29L30 2" stroke="black" strokeWidth="3"/>
          </svg>
        </div>
        <div className="user">
          <img src="/static/images/ivone.png" />
          <div className="user__info">
            <span className="user__info__name">Ivone Silva</span>
            <span className="user__info__score">580 pontos</span>
          </div>
        </div>
        <div className="options">
          <div className="options__main">
            <a onClick={() => {router.push('/')}}>Parceiros</a>
            <a onClick={() => {router.push('/')}}>Histórico de pontos</a>
            <a onClick={() => {router.push('/')}}>Editar Perfil</a>
          </div>
          <a className="options__logout" onClick={() => {router.push('/login')}}>Sair</a>
        </div>
      </MenuContent>
    </MenuWrapper>
  );
}

export default Menu;