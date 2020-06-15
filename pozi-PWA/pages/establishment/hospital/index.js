import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

import Header from '../../../components/header';

import { Container, Content } from './styles';


const Map = dynamic(
  () => import('../../../components/map'),
  { ssr: false }
)

const Dashboard = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('HOSPITAL');
  const [categories, setCategories] = useState([
    { name: 'Hospital', category: 'HOSPITAL' },
    { name: 'Posto de saúde', category: 'POSTO DE SAÚDE' },
    { name: 'Urgência', category: 'URGÊNCIA' },
    { name: 'SAMU', category: 'SAMU' },
    { name: 'Farmácia', category: 'FARMÁCIA' },
    { name: 'Apoio a saúde', category: 'APOIO À SAÚDE' },
  ]);

  const handleSelectedCategory = useCallback(newCategory => {
    setSelectedCategory(newCategory.target.value)
  }, [setSelectedCategory])

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
        <select name="category" id="category" value={selectedCategory} onChange={handleSelectedCategory}>
          {
            categories.map(item => (
              <option value={item.category}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <Content>
        
      <Map category={selectedCategory} />
      </Content>
    </Container>
  );
}

export default Dashboard;