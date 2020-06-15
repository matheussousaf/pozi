import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  & + div {
    margin-top: 30px;
  }
`;

export const Item = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin: 10px 0;

  & img {
    margin-right: 10px;
    color: #6A6A6A;
  }
`;