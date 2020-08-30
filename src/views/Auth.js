import React from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from '../api.js';
import { actions } from '../store/app.js';

const Auth = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    shouldUseNativeValidation: false,
    shouldUnregister: true,
    delayError: 1000,
    defaultValues: {
      email: '',
      password: '',
      country: '',
    },
  });

  // const { email, password } = watch();
  // const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(['sign-in', { email, password }], signIn, { enabled: false });
  const onSuccess = (data) => dispatch(actions.signIn(data));
  const { isLoading, isSuccess, isError, error, mutate } = useMutation(signIn, { onSuccess });

  return (
    <form className="paper form" noValidate={true} onSubmit={handleSubmit(mutate)}>
      <div className="control">
        <label className="label required" htmlFor={'email'}>
          Email
        </label>
        <input className="input" type={'email'} {...register('email', { required: true })} />
      </div>

      <div className="control">
        <label className="label required" htmlFor={'password'}>
          Password
        </label>
        <input className="input2" type={'password'} {...register('password', { required: true })} />
      </div>

      <div className="control">
        <label className="label" htmlFor={'country'}>
          Country
        </label>
        <select className="select" {...register('country', { required: false })}>
          <option value="" disabled={true} hidden={true}>
            Choose...
          </option>
          <option value="de">DE</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="it">IT</option>
          <option value="us">US</option>
        </select>
      </div>

      <button className="btn btn-blue" disabled={isLoading}>
        Login
      </button>

      <p className="helper">
        By clicking this button you agree with our <a href="#">terms and condition</a>.
      </p>

      {isSuccess && <p className="submit-success">Success.</p>}
      {isError && <p className="submit-error">{error.message}</p>}
    </form>
  );
};

export default Auth;
