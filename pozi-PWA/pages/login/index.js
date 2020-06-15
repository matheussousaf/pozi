import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import api from '../../services/api';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Footer } from './styles';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = useCallback(event => {
    setUser({
      ...user,
      [event.target.name]: [event.target.value]
    })
  }, [user, setUser])

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    
    await api.post('/auth/login/trucker', user);

    router.push('/');
  }, [])

  return (
    <Container>
      <div onClick={() => router.push('/')} className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
      <Content>
        <h2>Faça seu login</h2>
        <form>
          <Input
            name="email"
            value={user.email}
            handleChange={handleChange}
            placeholder="Email"
          />
          <Input
            name="password"
            value={user.password}
            handleChange={handleChange}
            placeholder="Senha"
          />

          <Button onClick={handleLogin}>Entrar</Button>
        </form>

        <Footer>
          <span>Ainda não tem conta?</span>
          <Link href="/register">
            <a>Cadastre-se!</a>
          </Link>
        </Footer>
      </Content>
    </Container>
  );
}

export default Login;