import React, { useState, useEffect, useCallback } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import Subarea from '../../components/Subarea';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalAddSubarea from '../../components/ModalAddSubarea';
import ModalEditSubarea from '../../components/ModalEditSubarea';

import { ButtonDiv, Container, NoSubareasFoundDiv } from './styles';

const Dashboard: React.FC = () => {
  const [subareas, setSubareas] = useState<Subarea[]>([]);
  const [editingSubarea, setEditingSubarea] = useState<Subarea>({} as Subarea);
  const [openAddSubareaModal, setOpenAddSubareaModal] = useState(false);
  const [openEditSubareaModal, setOpenEditSubareaModal] = useState(false);

  const handleOpenAddSubareaModal = useCallback(() => {
    setOpenAddSubareaModal((state) => !state);
  }, []);

  const handleOpenEditSubareaModal = useCallback(() => {
    setOpenEditSubareaModal((state) => !state);
  }, []);

  const handleEdit = useCallback(
    (subarea: Subarea) => {
      setEditingSubarea(subarea);

      handleOpenEditSubareaModal();
    },
    [handleOpenEditSubareaModal],
  );

  /**
   * API CALLS
   */
  useEffect(() => {
    api.get('/subareas').then((response) => {
      setSubareas(response.data);
    });
  }, []);

  const handleAddSubarea = useCallback(async (subarea: Omit<Subarea, 'id'>) => {
    try {
      const response = await api.post('/subareas', subarea);

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

  const handleUpdateSubarea = useCallback(
    async (subarea: Omit<Subarea, 'id'>): Promise<void> => {
      try {
        const subareasCopy = [...subareas];

        const foundSubareaIndex = subareasCopy.findIndex(
          (subareaCopy) => subareaCopy.id === editingSubarea.id,
        );

        subareasCopy[foundSubareaIndex].local = subarea.local;
        subareasCopy[foundSubareaIndex].name = subarea.name;
        subareasCopy[foundSubareaIndex].observations = subarea.observations;
        subareasCopy[foundSubareaIndex].tag = subarea.tag;
        subareasCopy[foundSubareaIndex].sector = subarea.sector;

        await api.put(
          `subareas/${editingSubarea.id}`,
          subareasCopy[foundSubareaIndex],
        );

        setSubareas(subareasCopy);
      } catch (error) {
        toast(error, {
          type: 'error',
        });
      }
    },
    [editingSubarea, subareas],
  );
  /**
   * API CALLS
   */

  return (
    <>
      <Header title="Subáreas" />

      <ModalAddSubarea
        isOpen={openAddSubareaModal}
        setIsOpen={handleOpenAddSubareaModal}
        handleAddSubarea={handleAddSubarea}
      />

      <ModalEditSubarea
        isOpen={openEditSubareaModal}
        editingSubarea={editingSubarea}
        setIsOpen={handleOpenEditSubareaModal}
        handleEditSubarea={handleUpdateSubarea}
      />

      <ButtonDiv>
        <Button type="button" onClick={handleOpenAddSubareaModal}>
          Adicionar subarea
        </Button>
      </ButtonDiv>

      <Container>
        {subareas.length !== 0 ? (
          subareas.map((subarea) => (
            <Subarea
              key={subarea.id}
              subarea={subarea}
              handleDelete={handleDeleteSubarea}
              handleEdit={handleEdit}
            />
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

export default Dashboard;
