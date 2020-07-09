import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import { FiX, FiEdit } from 'react-icons/fi';

import {
  SubareaCard,
  SubareaInfo,
  SubareaDetail,
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

interface Props {
  subarea: Subarea;
  handleDelete: (subarea_id: string) => void;
  handleEdit: (subarea: Subarea) => void;
}

const Subarea: React.FC<Props> = ({
  subarea,
  handleDelete,
  handleEdit,
}: Props) => {
  const handleDeleteSubarea = useCallback(
    (subarea_id: string) => {
      handleDelete(subarea_id);
    },
    [handleDelete],
  );

  const setEditingSubarea = useCallback(() => {
    handleEdit(subarea);
  }, [handleEdit, subarea]);

  return (
    <SubareaCard key={subarea.id}>
      <SubareaModifies>
        <button type="button" onClick={() => setEditingSubarea()}>
          <FiEdit color="#00c971" size={24} />
        </button>

        <button type="button" onClick={() => handleDeleteSubarea(subarea.id)}>
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
  );
};

export default Subarea;
