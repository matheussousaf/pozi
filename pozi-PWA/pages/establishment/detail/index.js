import React from 'react';
import { useRouter } from 'next/router'

import Header from '../../../components/header';

import Comments from '../../../components/comments';
import RatingBar from '../../../components/rating-bar';
import Ratings from '../../../components/star-ratings';
import Differentials from '../../../components/differentials';

import { Container, Content } from './styles';

const Dashboard = () => {
  const router = useRouter()

  return (
    <Container>
      <Header />
      
      <div className="back">
        <button onClick={() => router.back()}>
          <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L2 7.5M2 7.5L8 14M2 7.5H12.25H22.5" stroke="white" strokeWidth="2"/>
          </svg>
          Voltar
        </button>
      </div>
      <Content>
        <h2>Detalhes do estabelecimento</h2>
        <div className="differentials">
          <Differentials />
        </div>
        <div className="evaluation">
          <div className="evaluation__averages">
            <RatingBar rate={100} title="Limpeza" />
            <RatingBar rate={70} title="Segurança" />
            <RatingBar rate={80} title="Atendimento" />
          </div>
          <div className="evaluation__ratings">
            <span className="evaluation__ratings__count">4,0</span>
            <Ratings onlyReading rate={4} starSize="18px" />
            <span className="evaluation__ratings__comments">125 comentários</span>
          </div>
        </div>
        <div className="comments">
          <h3>Comentários:</h3>
          <Comments />
        </div>
      </Content>
    </Container>
  );
}

export default Dashboard;