import styled from 'styled-components';

export const Container = styled.div`
  .back {
    max-width: 768px;
    margin: 10px auto 0 10px;
    @media(min-width: 768px) {
      margin: 10px auto 0 auto;
    }
    button {
      background-color: transparent;
      color: #fff;
      font-size: 1.3em;
      font-weight: 600;
      & svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Content = styled.section`
  min-height: 100vh;
  max-width: 768px;

  background-color: #fff;
  border-radius: 45px 45px 0px 0px;
  padding: 30px 10px;
  margin: auto;
  margin-top: 20px;
  transition: .4s;
  @media(min-width: 768px) {
    height: auto;
    min-height: auto;
    border-radius: 45px;
    padding: 40px 40px 15px 40px;
    margin-bottom: 30px;
  }
  & h2 {
    color: #6D6966;
    text-align: center;
    font-size: 1.8em;
    text-transform: capitalize;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 25px 0;
  display: flex;
  & li {
    width: 100%;
    @media(min-width: 768px) {
      width: 50%;
    }
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  margin: 10px 10px 25px 10px;
  transition: all 0.3s ease-in-out;
  @media(min-width: 768px) {
    margin: 15px;
  }
  & img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 300px;
    min-width: 300px;
    /* height: 385px; */
    top: 0;
    opacity: 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
  }
  /* ${props => props.disabled ? '' : ''}; */
  &:hover {
    transform: scale(1.1);
    & .bg-image {
      background: linear-gradient(180deg,rgba(0, 0, 0, 0) 76.56%, rgba(0,0,0,0.7) 100%);
    }
  }

  &:hover::after {
    opacity: 1;
  }
  .info {
    padding: 10px 15px 15px 15px;
    &__row-one {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      & h4 {
        color: #6A6A6A;
        font-size: 1.4em;
      }
    }
    &__row-two {
      color: #C1C1C1;
      font-size: 1em;
      font-weight: 600;
      margin-bottom: 3px;
      & span .is-open {
        color: ${props => props.isOpen ? '#4BD77E' : '#F43C13' };
      }
    }
    &__row-three {
      color: #C1C1C1;
      font-size: .8em;
      margin-bottom: 5px;
    }
    &__row-four {
      display: flex;
      justify-content: center;
      & button {
        background: #4BD77E;
        color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
        border-radius: 20px;
        padding: 3px 15px;
      }
    }
  }
`;

export default Container;