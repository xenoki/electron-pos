import { Form, useForm } from 'react-final-form';
import { FormApi, FormSubscription } from 'final-form';
import FieldInput from './FieldInput';
import NavBar from './NavBar';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PrintButton from './PrintButton';
import LoginButton from './LoginButton';
import Action from './Action';

type LoginProps = { subscription: FormSubscription };

interface Credential {
  username: string;
  password: string;
}

const onSubmit = async (values: Credential, form: FormApi) => {
  return await window.electronAPI.auth(values);
};

function LoginForm({ subscription }: LoginProps) {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 500);
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      subscription={subscription}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        return (
          <form
            onSubmit={async (event) => {
              const data = await handleSubmit(event);
              form.reset();
              data.error ? ref.current.focus() : navigate('/dashboard');
            }}
          >
            <NavBar />
            <FieldInput ref={ref} name='username' type='text' />
            <FieldInput name='password' type='password' />
            <Action>
              <LoginButton submitting={submitting} />
              <PrintButton />
              <button
                className='btn btn-warning'
                type='button'
                onClick={() => window.electronAPI.quit()}
              >
                Quit
              </button>
            </Action>
          </form>
        );
      }}
    />
  );
}

LoginForm.Action = Action;

export default LoginForm;
