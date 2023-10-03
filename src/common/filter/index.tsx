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
      <Styles.Button open={open} onClick={() => setOpen(!open)}>
        <Text fontSize='medium' fontWeight='semi_bold'>{items.title}</Text>
        <ArrowDown width={15} height={15}/>
      </Styles.Button>
      <Styles.Content>
        {items.options.map((subItems, index) => {
          const test = subItems.product === 'Coco';

          return (
            <Styles.Options key={index.toString()} checked={test} onClick={() => setChecks([subItems.product])}>
              <Text
                color={test ? 'white' : 'text'}
                fontWeight={test ? 'semi_bold' : 'normal'}
                fontSize='small'
              >{subItems.product}</Text>
            </Styles.Options>
          )
        })}
      </Styles.Content>
    </Styles.Container>
  ))
};
