import React from 'react';

type LoginButtonProps = {
  submitting: boolean;
};
export default function LoginButton({ submitting }: LoginButtonProps) {
  return (
    <button
      type='submit'
      className={`btn-primary btn grow btn-lg shadow-xl ${
        submitting && 'loading'
      }`}
      disabled={submitting}
    >
      Login
    </button>
  );
}
