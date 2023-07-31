import React from 'react';

import { Skeleton, Text } from '..';

import { ArrowDown } from '@svg';
import { PropsFilter } from './type';

import * as Styles from './styles';

export const Filter: React.FC<PropsFilter> = ({ data = [] }: PropsFilter) => {
  const [open, setOpen] = React.useState(false);
  const [checks, setChecks] = React.useState<string[]>([]);

  if(data.length === 0){
    return <Skeleton quantity={5} width={300} height={40} />
  };

  return data.map((items, index) => (
    <Styles.Container key={index.toString()}>
      <Styles.Title open={open} onClick={() => setOpen(!open)}>
        <Text fontSize='medium' fontWeight='semi_bold'>{items.title}</Text>
        <ArrowDown width={15} height={15}/>
      </Styles.Title>
      {items.options.map((subItems, index) => (
        <Styles.Options key={index.toString()} open={open} onClick={() => setChecks([subItems.product])}>
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
      <Text fontWeight='normal' fontSize='small'>{items.product}</Text>
    </Styles.CheckBox>
  )
};