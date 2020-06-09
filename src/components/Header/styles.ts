import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: #009e59;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  strong {
    font-size: 24px;
  }
`;

export const LogoutButtom = styled.button`
  background: none;
  border: none;
`;
