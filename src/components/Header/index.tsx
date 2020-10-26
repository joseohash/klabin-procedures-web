import React, { useCallback } from 'react';

import { FiLogOut } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import avatar from '../../assets/avatar.jpeg';

import { useAuth } from '../../hooks/auth';

import { Container, LogoutButtom } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const history = useHistory();

  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <div>
        <img src={avatar} alt="Avatar" />
      </div>

      <strong>{title}</strong>
      <LogoutButtom onClick={handleLogout}>
        <FiLogOut size={32} color="#fff" onClick={signOut} />
      </LogoutButtom>
    </Container>
  );
};

export default Header;
