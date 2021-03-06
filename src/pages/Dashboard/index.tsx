import React, { useState, useCallback, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import { useAxios } from '../../hooks/UseAxios';

import Subarea from '../../components/Subarea';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalAddSubarea from '../../components/ModalAddSubarea';
import ModalEditSubarea from '../../components/ModalEditSubarea';
import PermanentDrawerLeft from '../../components/PermanentDrawerLeft';

import {
  SearchBar,
  Container,
  NoSubareasFoundDiv,
  InputDiv,
  RadioDiv,
  RadioTextDiv,
} from './styles';

const Dashboard: React.FC = () => {
  const [editingSubarea, setEditingSubarea] = useState<Subarea>({} as Subarea);
  const [openAddSubareaModal, setOpenAddSubareaModal] = useState(false);
  const [openEditSubareaModal, setOpenEditSubareaModal] = useState(false);

  const [searchFor, setSearchFor] = useState('tag');
  const [searchValue, setSearchValue] = useState('');

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
  // useEffect(() => {
  //   api.get('/subareas').then((response) => {
  //     setSubareas(response.data);
  //   });
  // }, []);

  const { data, mutate } = useAxios<Subarea[]>('subareas');

  const handleAddSubarea = useCallback(
    async (subarea: Omit<Subarea, 'id'>) => {
      try {
        const response = await api.post('/subareas', subarea);

        if (!data) {
          return <h1>Carregando</h1>;
        }

        mutate([response.data, ...data], false);

        // setSubareas((state) => [response.data, ...state]);

        toast('Subárea criada', {
          type: 'success',
        });
      } catch (err) {
        toast('Falha ao criar subárea', {
          type: 'error',
        });
      }
    },
    [data, mutate],
  );

  const handleDeleteSubarea = useCallback(
    (subarea_id: string) => {
      try {
        api.delete(`subareas/${subarea_id}`);

        const subareasWithOutDeletedSubarea = data?.filter(
          (subarea) => subarea.id !== subarea_id,
        );

        // setSubareas(subareasWithOutDeletedSubarea);
        mutate(subareasWithOutDeletedSubarea, false);

        toast('Subárea deletada', {
          type: 'success',
        });
      } catch (err) {
        toast('Falha ao deletar subárea', {
          type: 'error',
        });
      }
    },
    [data, mutate],
  );

  const handleUpdateSubarea = useCallback(
    (subarea): void => {
      try {
        api.put(`subareas/${editingSubarea.id}`, subarea);

        const updatedSubareas = data?.map((s) => {
          if (s.id === editingSubarea.id) {
            return {
              ...s,
              name: subarea.name,
              observations: subarea.observations,
              local: subarea.local,
              sector: subarea.sector,
              tag: subarea.tag,
            };
          }

          return s;
        });

        mutate(updatedSubareas, false);
      } catch (error) {
        toast(error, {
          type: 'error',
        });
      }
    },
    [data, mutate, editingSubarea.id],
  );

  useEffect(() => {
    api
      .get('subareas', {
        params: {
          searchFor,
          searchValue,
        },
      })
      .then((response) => {
        mutate(response.data, false);
      });
  }, [mutate, searchFor, searchValue]);

  /**
   * API CALLS
   */

  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchFor(event?.target.value);
    },
    [],
  );

  if (!data) {
    return <h1>Carregando...</h1>;
  }

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

      <SearchBar>
        <InputDiv>
          <RadioDiv>
            <RadioTextDiv>
              Tag
              <input
                type="radio"
                value="tag"
                checked={searchFor === 'tag'}
                onChange={handleRadioChange}
              />
            </RadioTextDiv>
            <RadioTextDiv>
              Local
              <input
                type="radio"
                value="local"
                checked={searchFor === 'local'}
                onChange={handleRadioChange}
              />
            </RadioTextDiv>
          </RadioDiv>
          <FiSearch />
          <input
            placeholder="Procurar subárea"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputDiv>
        <Button type="button" onClick={handleOpenAddSubareaModal}>
          Adicionar subarea
        </Button>
      </SearchBar>

      <Container>
        {data.length !== 0 ? (
          data.map((subarea) => (
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
      <PermanentDrawerLeft />
    </>
  );
};

export default Dashboard;
