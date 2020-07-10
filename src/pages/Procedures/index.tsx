import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  ProcedureInfo,
  ProcedureDetail,
  ProcedureCard,
  ProcedureFontColor,
} from './styles';
import { useAxios } from '../../hooks/UseAxios';

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

  const { data } = useAxios<Procedure[]>(
    `subareas/${params.subarea_id}/procedures`,
  );

  if (!data) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Header title="Procedimentos" />

      <Container>
        {data.map((procedure) => (
          <ProcedureCard key={procedure.id}>
            <img src={procedure.procedure_image_url} alt="" />
            <ProcedureInfo>
              <ProcedureDetail>
                <p>Descrição</p>
                <span>{procedure.description}</span>
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
