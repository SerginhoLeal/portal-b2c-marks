import React from 'react';

import { Controller, useForm } from 'react-hook-form';

import * as Styles from './styles';

interface Props {
  name: string;
  register: any;
  errors?: any;
  placeholder: string;
  icon(): JSX.Element;
  // type: 'search' | 'cep';
};

const Input: React.FC<Props> = ({
  name,
  errors,
  register,
  icon: Icon,
  placeholder = 'text',
}: Props) => {
  return (
    <>
      <Styles.Container>
        <Styles.Svg>
          <Icon />
          <span></span>
        </Styles.Svg>
        <Styles.InputStyles
          type={name}
          placeholder={placeholder}
          // {...register(name, { require: true })}
        />
      </Styles.Container>
      {errors?.message && <p>{errors.message}</p>}
    </>
  );
}

export { Input };