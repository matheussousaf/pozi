import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 20px;
  }
  & img {
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
  }
  & .info {
    &__name {
      color: #6D6966;
      font-size: 1.3em;
      font-weight: 600;
    }
    &__rating {
      display: flex;
      align-items: center;
      & > span {
        margin-left: 15px;
        font-size: .9em;
        color: rgba(207, 207, 207, 0.95);
      }
    }
    &__message {
      margin-top: 5px;
      color: #555;
      font-size: 1em;
    }
  }
`;