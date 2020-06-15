import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  & .stars-wrapper {
    align-items: center;
    display: flex;

    & input[type="radio"] {
      visibility:hidden;
      width: 62%;
      margin: 0;
    }

    .star-ratings-css {
      color: ${props => props.starColorDisabled};
      font-size: ${props => props.starSize};
      position: relative;
      /* text-shadow: 0px 1px 0 #a2a2a2; */
      
      &-top {
        font-size: ${props => props.starSize};
        color: ${props => props.starColor};
        position: absolute;
        z-index: 1;
        overflow: hidden;
      }
      &-bottom {
        z-index: 0;
      }
    }

    .rating {
      display: flex;
      direction: rtl;
    }

    .rating > input:checked ~ label, /* show gold star when clicked */
    .rating:not(:checked) > label:hover, /* hover current star */
    .rating:not(:checked) > label:hover ~ label {
      color: ${props => props.onlyReading ? '' : props.starColor};
      /* color: #F6C063; */
    } /* hover previous stars in list */

    .rating > input:checked + label:hover, /* hover current star when changing rating */
    .rating > input:checked ~ label:hover,
    .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
    .rating > input:checked ~ label:hover ~ label { color: ${props => props.starColorHover}; }

    &__rating-count {
      margin-left: 10px;
      font-weight: 100;
      font-size: 1.3em;
    }
  }
`;
