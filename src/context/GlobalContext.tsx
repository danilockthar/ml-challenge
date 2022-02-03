import React from 'react';
import merge from 'lodash/merge';

export const GlobalStateContext = React.createContext<any>(null);
GlobalStateContext.displayName = 'GlobalStateContext';

export const useGlobalState = () => {
  const context = React.useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }

  return context;
};

export const GlobalStateProvider = ({ children, initialState = '' }) => {
  const [searchValue, setSearchValue] = React.useState<string>(initialState);

  return (
    <GlobalStateContext.Provider
      value={{
        setSearchValue: (data) => setSearchValue(data),
        searchValue,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
