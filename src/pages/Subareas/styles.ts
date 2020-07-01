import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 64px auto;

  a {
    & + a {
      margin-top: 16px;
    }

    background-color: #3e3b47;
    display: flex;
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const SubareaCard = styled.div`
  color: #fff;
  padding: 20px;
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
