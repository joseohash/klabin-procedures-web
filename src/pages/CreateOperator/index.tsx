import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiCreditCard } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useAxios } from '../../hooks/UseAxios';

import PermanentDrawerLeft from '../../components/PermanentDrawerLeft';
import Header from '../../components/Header';
import Button from '../../components/Button';

import {
  Container,
  FormView,
  Input,
  NameCodView,
  OperatorContainer,
  ProcedureCard,
  ProcedureInfo,
  ProcedureDetail,
} from './styles';

interface Operators {
  id: string;
  name: string;
  cod: string;
  role: string;
}

const CreateOperator: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { data, mutate } = useAxios<Operators[]>('users/operators');

  console.log(data);

  const handleSubmit = useCallback(async () => {
    console.log('oi');
  }, []);

  if (!data) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Header title="Cadastrar operador" />

      <Container>
        <FormView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome completo" />
            <Input name="name" icon={FiCreditCard} placeholder="Código" />
            <NameCodView>
              <Input name="cod" icon={FiLock} placeholder="Senha" />
              <div style={{ width: '8px' }} />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Confirmar senha"
              />
            </NameCodView>
            <br />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </FormView>
      </Container>

      <OperatorContainer>
        {data.map((operator) => (
          <ProcedureCard key={operator.id}>
            <ProcedureInfo>
              <ProcedureDetail>
                <p>Nome</p>
                <span>{operator.name}</span>
              </ProcedureDetail>
              <ProcedureDetail>
                <p>Código</p>
                <span>{operator.cod}</span>
              </ProcedureDetail>
              <ProcedureDetail>
                <p>Role</p>
                <span>{operator.role}</span>
              </ProcedureDetail>
            </ProcedureInfo>
          </ProcedureCard>
        ))}
      </OperatorContainer>

      <PermanentDrawerLeft />
    </>
  );
};

export default CreateOperator;
