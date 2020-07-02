import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;

  img {
    margin: 16px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

export const ProcedureCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #3e3b47;
  border-radius: 4px;

  & + div {
    margin-top: 4px;
  }
`;

export const ProcedureInfo = styled.div`
  color: #fff;
  padding: 20px;
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
