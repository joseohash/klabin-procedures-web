import React, { useCallback } from 'react';

import { FiLogOut } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import avatar from '../../assets/avatar.jpeg';

import { Container, LogoutButtom } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <img src={avatar} alt="Avatar" />

      <strong>{title}</strong>

      <LogoutButtom onClick={handleLogout}>
        <FiLogOut size={26} color="#fff" />
      </LogoutButtom>
    </Container>
  );
};

export default Header;
