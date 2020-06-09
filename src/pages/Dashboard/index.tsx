import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, SubareaCard } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header title="Subáreas" />

      <Container>
        <Link to="/">
          <img src="https://s.dicio.com.br/subarea.jpg" alt="" />
          <SubareaCard>
            <p>Tag: 123819</p>
            <p>Local:</p>
            <p>Observações:</p>
            <p>Setor:</p>
            <p>Cadastrado por:</p>
          </SubareaCard>
        </Link>

        <Link to="/">
          <img src="https://s.dicio.com.br/subarea.jpg" alt="" />
          <SubareaCard>
            <p>Tag: 123819</p>
            <p>Local:</p>
            <p>Observações:</p>
            <p>Setor:</p>
            <p>Cadastrado por:</p>
          </SubareaCard>
        </Link>

        <Link to="/">
          <img src="https://s.dicio.com.br/subarea.jpg" alt="" />
          <SubareaCard>
            <p>Tag: 123819</p>
            <p>Local:</p>
            <p>Observações:</p>
            <p>Setor:</p>
            <p>Cadastrado por:</p>
          </SubareaCard>
        </Link>
      </Container>
    </>
  );
};

export default Dashboard;
