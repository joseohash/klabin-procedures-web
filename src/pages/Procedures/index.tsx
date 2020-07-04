import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  ProcedureInfo,
  ProcedureDetail,
  ProcedureCard,
  ProcedureFontColor,
} from './styles';

interface Params {
  subarea_id: string;
}

interface Procedure {
  id: string;
  description: string;
  font: string;
  font_hex: string;
  local: string;
  observations: string;
  tag: string;
  procedure_image_url: string;

  subarea: {
    tag: string;
  };
}

const Procedures: React.FC = () => {
  const { params } = useRouteMatch<Params>();

  const [procedures, setProcedures] = useState<Procedure[]>([]);

  useEffect(() => {
    api
      .get<Procedure[]>(`subareas/${params.subarea_id}/procedures`)
      .then((response) => {
        const proceduresResponse = response.data;

        setProcedures(proceduresResponse);
      });
  }, [params.subarea_id]);

  return (
    <>
      <Header title="Procedimentos" />

      <Container>
        {procedures.map((procedure) => (
          <ProcedureCard key={procedure.id}>
            <img src={procedure.procedure_image_url} alt="" />
            <ProcedureInfo>
              <ProcedureDetail>
                <p>Descrição</p>
                <span>
                  {procedure.description}Texto é um conjunto de palavras e
                  frases encadeadas que permitem interpretação e transmitem uma
                  mensagem. É qualquer obra escrita em versão original e que
                  constitui um livro ou um documento escrito. Um texto é uma
                  unidade linguística de extensão superior à frase.
                </span>
              </ProcedureDetail>
              <ProcedureDetail>
                <p>Fonte</p>
                <span>{procedure.font}</span>
              </ProcedureDetail>
              <ProcedureDetail>
                <p>Local</p>
                <span>{procedure.local}</span>
              </ProcedureDetail>
              <ProcedureDetail>
                <p>Observações</p>
                <span>{procedure.observations}</span>
              </ProcedureDetail>
              <ProcedureDetail>
                <p>Tag</p>
                <span>{procedure.tag}</span>
              </ProcedureDetail>
            </ProcedureInfo>
            <ProcedureFontColor fontColor={procedure.font} />
          </ProcedureCard>
        ))}
      </Container>
    </>
  );
};

export default Procedures;
