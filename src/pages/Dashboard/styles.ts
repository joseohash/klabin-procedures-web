import styled from 'styled-components';

export const ButtonDiv = styled.div`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  justify-content: flex-end;

  button {
    width: 300px;
    color: #fff;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 64px auto;

  a {
    background-color: #3e3b47;
    display: flex;
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
  }
`;

export const NoSubareasFoundDiv = styled.div`
  background-color: #3e3b47;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #c9c9c9;
  font-size: 24px;
`;
