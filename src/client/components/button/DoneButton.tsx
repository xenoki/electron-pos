import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DoneButtonProps {
  onDone: () => void;
}
export default function DoneButton({ onDone }: DoneButtonProps) {
  const navigate = useNavigate();
  return (
    // <button className='bnt-neutral btn' onClick={() => navigate('/')}>
    //   Done
    // </button>
    <button
      className='btn-accent btn btn-lg mt-9 basis-1/12 shadow-xl'
      onClick={onDone}
    >
      Done
    </button>
  );
}
