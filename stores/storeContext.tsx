'use client';

import React, { createContext, useContext } from 'react';
import {initializeStore} from "@/stores/createStore";

// Create context
const StoreContext = createContext(null);

interface Props {
  children: React.ReactNode;
  initialState?: any
}

// Provider component
export const StoreProvider = ({ children, initialState }: Props) => {
  const store = initializeStore(initialState);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook to use the store in components
export const useStore = () => useContext(StoreContext);