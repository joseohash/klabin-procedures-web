import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { FiX, FiEdit } from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalAddSubarea from '../../components/ModalAddSubarea';

import {
  ButtonDiv,
  Container,
  SubareaCard,
  SubareaInfo,
  SubareaDetail,
  NoSubareasFoundDiv,
  SubareaModifies,
} from './styles';

interface Subarea {
  id: string;
  tag: string;
  name: string;
  sector: string;
  local: string;
  observations: string;
}

const Subareas: React.FC = () => {
  const [subareas, setSubareas] = useState<Subarea[]>([]);
  const [openAddSubareaModal, setOpenAddSubareaModal] = useState(false);

  useEffect(() => {
    api.get('/subareas').then((response) => {
      setSubareas(response.data);
    });
  }, []);

  const handleOpenAddSubareaModal = useCallback(() => {
    setOpenAddSubareaModal((state) => !state);
  }, []);

  const handleAddSubarea = useCallback(async (subarea: Omit<Subarea, 'id'>) => {
    try {
      const response = await api.post('/subareas', subarea);

      console.log(response.data);

      setSubareas((state) => [response.data, ...state]);

      toast('Subárea criada', {
        type: 'success',
      });
    } catch (err) {
      toast('Falha ao criar subárea', {
        type: 'error',
      });
    }
  }, []);

  const handleDeleteSubarea = useCallback(
    async (subarea_id: string) => {
      try {
        await api.delete(`subareas/${subarea_id}`);

        const subareasCopy = [...subareas];

        const subareasWithOutDeletedSubarea = subareasCopy.filter(
          (subareaCopied) => subareaCopied.id !== subarea_id,
        );

        setSubareas(subareasWithOutDeletedSubarea);

        toast('Subárea deletada', {
          type: 'success',
        });
      } catch (err) {
        toast('Falha ao deletar subárea', {
          type: 'error',
        });
      }
    },
    [subareas],
  );

  return (
    <>
      <Header title="Subáreas" />

      <ModalAddSubarea
        isOpen={openAddSubareaModal}
        setIsOpen={handleOpenAddSubareaModal}
        handleAddSubarea={handleAddSubarea}
      />

      <ButtonDiv>
        <Button type="button" onClick={handleOpenAddSubareaModal}>
          Adicionar subarea
        </Button>
      </ButtonDiv>

      <Container>
        {subareas.length !== 0 ? (
          subareas.map((subarea) => (
            <SubareaCard key={subarea.id}>
              <SubareaModifies>
                <button type="button">
                  <FiEdit color="#00c971" size={24} />
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteSubarea(subarea.id)}
                >
                  <FiX color="#ff0000" size={32} />
                </button>
              </SubareaModifies>

              <Link key={subarea.id} to={`/procedures/${subarea.id}`}>
                <SubareaInfo>
                  <SubareaDetail>
                    <p>Nome</p>
                    <span>{subarea.name}</span>
                  </SubareaDetail>
                  <SubareaDetail>
                    <p>Tag</p>
                    <span>{subarea.tag}</span>
                  </SubareaDetail>
                  <SubareaDetail>
                    <p>Setor</p>
                    <span>{subarea.sector}</span>
                  </SubareaDetail>
                  <SubareaDetail>
                    <p>Local</p>
                    <span>{subarea.local}</span>
                  </SubareaDetail>
                  <SubareaDetail>
                    <p>Observações</p>
                    <span>{subarea.observations}</span>
                  </SubareaDetail>
                </SubareaInfo>
              </Link>
            </SubareaCard>
          ))
        ) : (
          <NoSubareasFoundDiv>
            <p>Nenhuma subárea cadastrada</p>
          </NoSubareasFoundDiv>
        )}
      </Container>
      <ToastContainer />
    </>
  );
};

export default Subareas;
