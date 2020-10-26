import React, { useRef, useCallback } from 'react';
import { FiCreditCard, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../assets/klabin-logo.svg';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValitationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Content, AnimationContainer, Background, Container } from './styles';

interface SignInFormData {
  cod: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          cod: Yup.string().required('Código obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          cod: data.cod,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
        toast('Falha ao fazer login', {
          type: 'error',
        });
      }
    },
    [signIn, history],
  );

  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <img src={logo} alt="KlabinProcedures" />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Login do administrador</h1>

              <Input name="cod" icon={FiCreditCard} placeholder="Código" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <br />

              <Button type="submit">Entrar</Button>
            </Form>
          </AnimationContainer>
        </Content>

        <Background />
      </Container>
      <ToastContainer />
    </>
  );
};

export default SignIn;
