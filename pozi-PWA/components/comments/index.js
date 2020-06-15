import React from 'react';

import Ratings from '../star-ratings';

import { Container, Comment } from './styles';

const Comments = () => {
  return (
    <Container>
      <Comment>
        <img src="/static/images/truck.png" />
        <div className="info">
          <span className="info__name">Jorge Xavier</span>
          <div className="info__rating">
            <Ratings onlyReading rate={5} starSize="12px" />
            <span>2 dias atrás</span>
          </div>
          <p className="info__message">Atendimento nota 10, só achei o preço meio salgado!</p>
        </div>
      </Comment>
      <Comment>
        <img src="/static/images/truck.png" />
        <div className="info">
          <span className="info__name">Jorge Xavier</span>
          <div className="info__rating">
            <Ratings onlyReading rate={5} starSize="12px" />
            <span>2 dias atrás</span>
          </div>
          <p className="info__message">Atendimento nota 10, só achei o preço meio salgado!</p>
        </div>
      </Comment>
    </Container>
  );
}

export default Comments;