import React from 'react';

import { Skeleton, Text } from '..';

import { ArrowDown } from '@svg';
import { PropsFilter } from './type';

import * as Styles from './styles';

export const Filter: React.FC<PropsFilter> = ({ data = [] }: PropsFilter) => {
  const [open, setOpen] = React.useState(false);
  const [checks, setChecks] = React.useState<string[]>([]);

  if(data.length === 0){
    return <Skeleton quantity={5} width={100} height={8} />
  };

  return data.map(items => (
    <Styles.Container>
      <Styles.Title open={open} onClick={() => setOpen(!open)}>
        <Text fontsize='medium' fontWeight='large' color='secondary'>{items.title}</Text>
        <ArrowDown />
      </Styles.Title>
      {items.options.map((subItems, index) => (
        <Styles.Options open={open} onClick={() => setChecks([subItems.product])}>
          <CheckBox items={subItems} index={index} checks={checks} />
        </Styles.Options>
      ))}
    </Styles.Container>
  ))
}

const CheckBox = ({ items, index, checks }: any) => {
  // const isCheck = checks.includes(items.product)
  return (
    <Styles.CheckBox key={index.toString()}>
      <Styles.Check />
      &nbsp;
      <Text fontWeight='small' fontsize='small'>{items.product}</Text>
    </Styles.CheckBox>
  )
};