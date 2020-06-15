import styled from 'styled-components';

export const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.isOpened ? 'rgba(0, 0, 0, .3)' : 'rgba(0, 0, 0, 0)' };
  visibility: ${props => props.isOpened ? 'visible' : 'hidden'};
  z-index: 2;
`;

export const MenuContent = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  right: ${props => props.isOpened ? '0' : '-80%'};
  top: 0;
  padding: 25px;
  transition: .5s ease-in-out;

  z-index: 5;
  @media(min-width: 768px) {
    width: 400px;
    right: ${props => props.isOpened ? '0' : '-400px'};
  }
  & .menu-header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  & .user {
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    img {
      width: 40px;
      min-width: 40px;
      height: 40px;
      min-height: 40px;
      border-radius: 50%;
      margin-right: 15px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      color: #6A6A6A;
      &__name {
        font-size: 1.3em;
        font-weight: 600;
      }
      &__score {
        font-size: .9em;
        font-weight: 200;
      }
    }
  }
  & .options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    color: #6A6A6A;
    font-size: 1.3em;
    font-weight: 500;
    &__main {
      display: flex;
      flex-direction: column;
      & a {
        display: block;
      }
      & a + a {
        margin-top: 30px;
      }
    }
    &__logout {

    }
  }
`;