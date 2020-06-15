import React from 'react';

import { Container, Item } from './styles';

const Comments = () => {
  const items = [
    {
      name: 'Segurança',
      icon: 'security',
    },
    {
      name: 'Ar condicionado',
      icon: 'ice',
    },
    {
      name: 'Wifi',
      icon: 'wifi',
    },
  ]
  return (
    <Container>
      {
        items.map(item => (
          <Item>
            <img src={`/static/images/icons/${item.icon}.svg`} />
            <span>{item.name}</span>
          </Item>
        ))
      }
    </Container>
  );
}

export default Comments;