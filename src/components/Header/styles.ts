import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: #009e59;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  strong {
    font-size: 24px;
  }
`;

export const LogoutButtom = styled.button`
  background: none;
  border: none;
  padding: 16px;
`;
