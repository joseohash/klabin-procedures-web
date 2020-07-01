import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, SubareaCard } from './styles';
import api from '../../services/api';

interface Subarea {
  id: string;
  tag: string;
  name: string;
  sector: string;
  local: string;
  observations: string;
}

const Subareas: React.FC = () => {
  const [subareas, setSubareas] = useState<Subarea[]>([]);

  useEffect(() => {
    api.get('/subareas').then((response) => {
      setSubareas(response.data);
    });
  }, []);

  return (
    <>
      <Header title="Subáreas" />

      <Container>
        {subareas.map((subarea) => (
          <Link to="/" key={subarea.id}>
            <SubareaCard>
              <p>{`Tag: ${subarea.tag}`}</p>
              <p>{`Local: ${subarea.local}`}</p>
              <p>{`Setor: ${subarea.sector}`}</p>
              <p>{`Local: ${subarea.local}`}</p>
              <p>{`Observações: ${subarea.observations}`}</p>
            </SubareaCard>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Subareas;
