import styled from 'styled-components';

export const SubareaCard = styled.div`
  transition: transform 0.2s;

  & + div {
    margin-top: 32px;
  }

  &:hover {
    transform: translateX(16px);
  }
`;

export const SubareaModifies = styled.div`
  margin: 8px 0 auto auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    margin-bottom: 4px;
    margin-left: 8px;
  }

  button {
    padding: none;
    background: none;
    border: none;

    & + button {
      margin-left: 24px;
    }
  }
`;

export const SubareaInfo = styled.div`
  color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;

  p + p {
    margin-top: 16px;
  }
`;

export const SubareaDetail = styled.div`
  display: flex;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: 4px;
    color: #00ff90;
  }
`;
