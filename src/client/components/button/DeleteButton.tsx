import React from 'react';

type Props = {
  onClick?: () => void;
};
const DeleteButton = ({ onClick }: Props) => {
  return (
    <button
      className='btn-secondary btn-lg btn mt-9 w-32 shadow-xl'
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
