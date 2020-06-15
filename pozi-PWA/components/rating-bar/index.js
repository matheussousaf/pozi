import React from 'react';

import { Container, Bar } from './styles';

const RatingBar = ({ title, rate }) => {
  return (
    <Container>
      <span>{title}</span>
      <Bar rate={rate} />
    </Container>
  );
}

export default RatingBar;