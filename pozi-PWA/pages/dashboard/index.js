import React from 'react';
import Link from 'next/link'

import Header from '../../components/header';

import { Container, Content, List } from './styles';

const Dashboard = () => {

  return (
    <Container>
      <Header />

      <Content>
        <h2>Procure por estabelecimentos feitos para você!</h2>
        <List>
          <li>
            <Link href="/establishment/[category]" as={`/establishment/${'pousada'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/pousada.png" />
                <span>Pousadas</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/establishment/[category]" as={`/establishment/${'posto'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/posto-gasolina.png" />
                <span>Postos</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/establishment/hospital">
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/hospital.png" />
                <span>Hospitais</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/establishment/[category]" as={`/establishment/${'restaurante'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/restaurante.png" />
                <span>Restaurante</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/establishment/[category]" as={`/establishment/${'mecanico'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/mecanico.png" />
                <span>Mecânicos</span>
              </a>
            </Link>
          </li>
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;