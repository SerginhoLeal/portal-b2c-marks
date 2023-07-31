import React, { ReactNode, useContext, createContext } from 'react';

import { api } from '@services';

interface ChildrenProps {
  children?: ReactNode;
  filter?: Array<any>;
};

interface FilterProduct {
  title: string;
  options: Array<{product: string; stock: boolean;}>;
};

interface MainContextProviderProps {
  test: string;
  filter?: FilterProduct[];
};

const MainContext = createContext({} as MainContextProviderProps);

export const MainContextProvider = ({ children }: ChildrenProps) => {
  const [filter, setFilter] = React.useState<FilterProduct[]>();

  React.useEffect(() => {
    (() => {
      api.get('/filter')
        .then(response => setFilter(response.data))
    })();
  }, []);

  const value = {
    test: 'context test',
    filter
  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
};

export const useMainContext = () => useContext(MainContext);