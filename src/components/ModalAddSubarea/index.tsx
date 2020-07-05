import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface CreateFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  // handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalAddSubarea: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: CreateFoodData) => {
      setIsOpen();
    },
    [setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Subárea</h1>

        <Input name="name" placeholder="Tag" isModal />
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
