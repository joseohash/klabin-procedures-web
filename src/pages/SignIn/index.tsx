import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/klabin-logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Content, AnimationContainer, Background, Container } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    history.push('dashboard');
  }, [history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="KlabinProcedures" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            {/* <h1>Faça seu logon</h1>

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              /> */}

            <Button type="submit">Entrar</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
