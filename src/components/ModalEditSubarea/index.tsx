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
  editingSubarea: Subarea;
  handleEditSubarea: (subarea: Subarea) => Promise<void>;
}

const ModalEditSubarea: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  editingSubarea,
  handleEditSubarea,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleEdit = useCallback(
    async (data: Subarea) => {
      handleEditSubarea(data);

      setIsOpen();
    },
    [handleEditSubarea, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleEdit} initialData={editingSubarea}>
        <h1>Editar Subárea</h1>

        <Input name="name" placeholder="Nome" isModal />
        <Input name="tag" placeholder="Tag" isModal />
        <Input name="sector" placeholder="Setor" isModal />
        <Input name="local" placeholder="Local" isModal />
        <Input name="observations" placeholder="Observações" isModal />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Atualizar Subárea</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditSubarea;
