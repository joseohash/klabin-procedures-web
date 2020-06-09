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

    img {
      margin: 16px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
`;

export const SubareaCard = styled.div`
  color: #fff;

  p + p {
    margin-top: 16px;
  }
`;
