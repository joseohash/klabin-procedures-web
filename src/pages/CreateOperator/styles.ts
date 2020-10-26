import styled from 'styled-components';
import InputRegister from '../../components/Input';

export const Container = styled.div`
  max-width: 1120px;
  margin: 64px auto;

  background: #3e3b47;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const FormView = styled.div`
  padding: 64px;
`;

export const Input = styled(InputRegister)``;

export const NameCodView = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OperatorContainer = styled.div`
  max-width: 1300px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const ProcedureCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #3e3b47;
  border-radius: 4px;

  img {
    margin: 16px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  & + div {
    margin-top: 4px;
  }
`;

export const ProcedureInfo = styled.div`
  color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;

  p + p {
    margin-top: 16px;
  }
`;

export const ProcedureDetail = styled.div`
  display: flex;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: 4px;
    color: #00ff90;
  }
`;
