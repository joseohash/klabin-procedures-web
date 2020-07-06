import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface Subarea {
  name: string;
  tag: string;
  sector: string;
  local: string;
  observations: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddSubarea: (subarea: Subarea) => void;
}

const ModalAddSubarea: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddSubarea,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Subarea) => {
      handleAddSubarea(data);
      setIsOpen();
    },
    [setIsOpen, handleAddSubarea],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Subárea</h1>

        <Input name="name" placeholder="Nome" isModal />
        <Input name="tag" placeholder="Tag" isModal />
        <Input name="sector" placeholder="Setor" isModal />
        <Input name="local" placeholder="Local" isModal />
        <Input name="observations" placeholder="Observações" isModal />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Subárea</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddSubarea;
