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
  padding: 30px;
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
    font-size: 1.7em;
  }
  & h3 {
    color: #6D6966;
    font-size: 1.5em;
    margin: 40px 0 20px 0;
  }
  .differentials {
    margin: 20px 0;
  }
  .evaluation {
    display: flex;
    margin: 20px 0;
    color: #6D6966;
    justify-content: space-between;
    &__averages {
      width: 60%;
      margin-right: 15px;
    }
    &__ratings {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__count {
        font-weight: bold;
        font-size: 3.5em;
        margin-bottom: 5px;
      }
      &__comments {
        font-size: .9em;
        margin-top: 5px;
      }
    }
  }
`;

export default Container;