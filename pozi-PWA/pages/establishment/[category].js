import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

import Header from '../../components/header';
import Ratings from '../../components/star-ratings';

import { Container, Content, List, Card } from './styles';

const Dashboard = () => {
  const router = useRouter()

  // dormir
  // hospitais
  // mecanicas
  // comida

  const data = [
    {
      category: 'pousada',
      items: [
        {
          name: 'Renovias',
          img: 'renovias',
          rate: 5,
          aberto: true,
        },
        {
          name: 'Parada obrigatória',
          img: 'parada-obrigatoria',
          rate: 4,
          aberto: false,
        },
      ]
    },
    {
      category: 'mecanico',
      items: [
        {
          name: 'Diesel Zimmer',
          img: 'diesel-zimmer',
          rate: 5,
          aberto: true,
        },
        {
          name: 'D S Mecânica Diesel',
          img: 'd-s-mecanica-diesel',
          rate: 4,
          aberto: false,
        },
      ]
    },
    {
      category: 'restaurante',
      items: [
        {
          name: 'Frango Assado',
          img: 'frango-assado',
          rate: 5,
          aberto: true,
        },
        {
          name: 'Sabor do Sertão',
          img: 'sabor-do-sertao',
          rate: 4,
          aberto: false,
        },
      ]
    },
    {
      category: 'posto',
      items: [
        {
          name: 'Renovias',
          img: 'renovias',
          rate: 5,
          aberto: true,
        },
        {
          name: 'Parada obrigatória',
          img: 'parada-obrigatoria',
          rate: 4,
          aberto: false,
        },
      ]
    },
  ]

  const { category } = router.query;

  const dataByCategory = data.find(item => item.category === category);

  return (
    <Container>
      <Header />
      
      <div className="back">
        <button onClick={() => router.push('/')}>
          <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L2 7.5M2 7.5L8 14M2 7.5H12.25H22.5" stroke="white" strokeWidth="2"/>
          </svg>
          Voltar
        </button>
      </div>
      <Content>
        <h2>{ category }s</h2>
        <List>
          {
            dataByCategory &&
            dataByCategory.items.map(item =>
              <li>
                <Link href="/establishment/detail">
                  <a>
                    <Card isOpen={item.aberto}>
                      <div className="bg-image"></div>
                      <img src={`/static/images/establishments/${item.img}.png`} />
                      <div className="info">
                        <div className="info__row-one">
                          <h4>{item.name}</h4>
                          <Ratings onlyReading rate={item.rate} starSize="15px" />
                        </div>
                        <div className="info__row-two">
                          <span>
                            <span className="is-open">{item.aberto ? 'Aberto' : 'Fechado'}</span> - Fecha às 22:00 - 4km
                          </span>
                        </div>
                        <div className="info__row-three">
                          <span>
                            Av. Standard - nº 833 - Tres Portos, Esteio - RS, 93270-000
                          </span>
                        </div>
                        <div className="info__row-four">
                          <button>Detalhes das avaliações</button>
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              </li>
            )
          }
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;