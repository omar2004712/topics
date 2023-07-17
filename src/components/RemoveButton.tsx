'use client';

import { HiOutlineTrash } from 'react-icons/hi';

interface RemoveButtonProps {
  onDelete: () => any;
}

export default function RemoveButton({ onDelete }: RemoveButtonProps) {
  return (
    <button className='text-red-400' onClick={onDelete}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
