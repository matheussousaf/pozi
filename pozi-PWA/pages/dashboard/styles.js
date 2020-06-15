import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.section`
  height: calc(100vh);
  max-width: 768px;

  background-color: #fff;
  border-radius: 45px 45px 0px 0px;
  padding: 30px 10px;
  margin: auto;
  margin-top: 20px;
  transition: .4s;
  @media(min-width: 768px) {
    height: auto;
    border-radius: 45px;
    padding: 40px 40px 15px 40px;
  }
  & h2 {
    color: #6D6966;
    text-align: center;
    font-size: 1.5em;
    padding: 0 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 25px 0;
  & li {
    width: 50%;

    & a {
      margin: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.11);
      border-radius: 10px;
      padding: 10px;

      color: #6D6966;
      font-size: 1.2em;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      & span {
        padding-bottom: 5px;
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
    }
  }
`;

export default Container;