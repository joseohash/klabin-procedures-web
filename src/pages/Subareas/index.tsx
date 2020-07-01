import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, SubareaCard, SubareaDetail } from './styles';
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
          <Link to={`/procedures/${subarea.id}`} key={subarea.id}>
            <SubareaCard>
              <SubareaDetail>
                <p>Tag:</p>
                <span>{subarea.tag}</span>
              </SubareaDetail>
              <SubareaDetail>
                <p>Local:</p>
                <span>{subarea.local}</span>
              </SubareaDetail>
              <SubareaDetail>
                <p>Setor:</p>
                <span>{subarea.sector}</span>
              </SubareaDetail>
              <SubareaDetail>
                <p>Local:</p>
                <span>{subarea.local}</span>
              </SubareaDetail>
              <SubareaDetail>
                <p>Observações:</p>
                <span>{subarea.observations}</span>
              </SubareaDetail>
            </SubareaCard>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Subareas;
