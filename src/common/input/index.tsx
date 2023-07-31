import React from 'react';

import { Controller, useForm } from 'react-hook-form';

import * as Styles from './styles';

interface Props {
  name: string;
  register: any;
  errors?: any;
  placeholder: string;
  // icon: any;
  // type: 'search' | 'cep';
};

const Input: React.FC<Props> = ({
  name,
  errors,
  register,
  placeholder = 'text',
}: Props) => {
  return (
    <>
      <Styles.Container>
        <Styles.InputStyles
          type={name}
          placeholder={placeholder}
          {...register(name, { require: true })}
        />
      </Styles.Container>
      {errors?.message && <p>{errors.message}</p>}
    </>
  );
}

export { Input };