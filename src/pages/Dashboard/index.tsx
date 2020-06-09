import React from 'react';

import Header from '../../components/Header';

import { Container, Machine } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header title="Administração - Máquinas" />

      <Container>
        <Machine>
          <strong>nome da maquina</strong>
          <p>descricao</p>
        </Machine>
        <Machine>
          <strong>nome da maquina</strong>
          <p>descricao</p>
        </Machine>
        <Machine>
          <strong>nome da maquina</strong>
          <p>descricao</p>
        </Machine>
      </Container>
    </>
  );
};

export default Dashboard;
