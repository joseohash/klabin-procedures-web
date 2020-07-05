import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { ButtonDiv, Container, SubareaCard, SubareaDetail } from './styles';
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

      <ButtonDiv>
        <Button type="button">Adicionar subarea</Button>
      </ButtonDiv>

      <Container>
        {subareas.map((subarea) => (
          <Link key={subarea.id} to={`/procedures/${subarea.id}`}>
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
