import styled from 'styled-components';

export const ButtonDiv = styled.div`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  align-items: center;

  button {
    margin-left: 32px;
    width: 250px;
    color: #fff;
  }
`;

export const RadioDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 24px;
`;

export const RadioTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;

  input {
    color: red;
  }
`;

export const InputDiv = styled.div`
  background: #3e3b47;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #c9c9c9;
  color: #c9c9c9;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
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
