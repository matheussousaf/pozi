import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 0 0;
  & .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    & img {
      width: 80px;
    }
    & span {
      font-family: 'Acme', sans-serif !important;
      font-size: 35px;
      font-weight: 600;
      color: #fff;
    }
  }
`;