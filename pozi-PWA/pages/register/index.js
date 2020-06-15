import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Footer } from './styles';

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = useCallback(event => {
    setUser({
      ...user,
      [event.target.name]: [event.target.value]
    })
  }, [])

  return (
    <Container>
      <div onClick={() => router.push('/')} className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
      <Content>
        <h2>Registre-se</h2>
        <form>
          <Input
            name="name"
            value={user.name}
            handleChange={handleChange}
            placeholder="Nome"
          />
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

          <Button onClick={() => {}}>Cadastrar</Button>
        </form>

        <Footer>
          <span>Ja tem conta?</span>
          <Link href="/login">
            <a>Entre!</a>
          </Link>
        </Footer>
      </Content>
    </Container>
  );
}

export default Register;