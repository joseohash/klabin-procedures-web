import styled from 'styled-components';

export const Container = styled.div`
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

export const ProcedureFontColor = styled.div`
  height: 40px;
  width: 40px;
  margin: 16px 16px auto auto;
  background: red;
  border-radius: 50%;
`;
