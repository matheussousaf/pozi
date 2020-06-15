import styled from 'styled-components';

export const Container = styled.div`
  span {
    font-weight: 100;
    font-size: .8em;
    margin-bottom: 3px;
    display: block;
    color: #6D6966;
  }
  & + div {
    margin-top: 13px;
  }
`;

export const Bar = styled.div`
  height: 10px;
  background-color: #EEE;
  border-radius: 15px;
  margin-bottom: 5px;
  position: relative;
  @keyframes load {
    from {
      width: 0%
    }
  }

  &::before {
    content: '';
    background: radial-gradient(81.64% 175.97% at 0% 0%,#F5762A 0%,#FFB633 100%);
    display: inline-block;
    padding: 5px 0 5px 10px;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    animation: load 2s 0s;
  }

  &::before{
    width: ${props => props.rate}%;
  }
`;