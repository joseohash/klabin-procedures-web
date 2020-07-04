import styled, { css } from 'styled-components';

interface ProcedureFontColorProps {
  fontColor: string;
}

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

export const ProcedureFontColor = styled.div<ProcedureFontColorProps>`
  height: 40px;
  width: 40px;
  margin: 16px 32px auto auto;
  padding: 16px;
  border-radius: 50%;

  ${(props) => {
    switch (props.fontColor) {
      case 'Massa':
        return css`
          background: #8b4513;
        `;
      case 'Química':
        return css`
          background: #7fffd4;
        `;
      case 'Pneumática':
        return css`
          background: #00bfff;
        `;
      case 'Elétrica':
        return css`
          background: #b5171b;
        `;
      case 'Água':
        return css`
          background: #18b41b;
        `;
      case 'Mecânica':
        return css`
          background: #4f4e52;
        `;

      default:
        return css`
          background: #3e3b47;
        `;
    }
  }}
`;
