import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from 'react-final-form';
import { FormApi, FormSubscription } from 'final-form';
import { useNavigate } from 'react-router-dom';
import { CHANNEL } from '../../../electron/channel';
import { AuthResponse, Credential } from '../../../renderer';
import Button from '../button';
import Action from '../action/Action';
import InputField from '../input/InputField';
import { handlePrint } from '../../libs';

type Props = { subscription: FormSubscription };

const onSubmit = async (values: Credential, form: FormApi) => {
  return await window.api.invoke<AuthResponse>(CHANNEL.AUTHENTICATE, values);
};

function LoginForm({ subscription }: Props) {
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const backupDatabase = useCallback(() => {
    setLoading(true);
    window.api.send(CHANNEL.BACKUP, {});
    window.api.on(CHANNEL.BACKUP, (data) => {
      console.log(data);
      window.api.removeAllListeners(CHANNEL.BACKUP);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.focus();
    }, 200);
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      subscription={subscription}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form
          onSubmit={async (event) => {
            const data = await handleSubmit(event);
            console.log(data);
            form.reset();
            data.error ? ref.current.focus() : navigate('/dashboard');
          }}
        >
          <InputField
            ref={ref}
            name='username'
            type='text'
            placeholder='enter username'
            normal
          />
          <InputField
            name='password'
            type='password'
            placeholder='enter password'
            normal
          />
          <Action>
            <Button.Login submitting={submitting} />
          </Action>
          <Action>
            <Button.Quit onClick={() => window.api.invoke(CHANNEL.QUIT)} />
            <Button.Backup loading={loading} onClick={backupDatabase} />
            <button
              type='button'
              className='btn btn-warning'
              onClick={() => window.api.invoke(CHANNEL.PRINT_REPORT)}
            >
              Print
            </button>
          </Action>
        </form>
      )}
    />
  );
}

export default LoginForm;
