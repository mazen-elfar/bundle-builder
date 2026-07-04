import React, { useReducer } from 'react';
import { BundleContext } from './BundleContext';
import { bundleReducer, initialState } from './BundleReducer';

interface BundleProviderProps {
  children: React.ReactNode;
}

const BundleProvider = ({ children }: BundleProviderProps) => {
  const [state, dispatch] = useReducer(bundleReducer, initialState);

  return (
    <BundleContext.Provider value={{ state, dispatch }}>
      {children}
    </BundleContext.Provider>
  );
};

export default BundleProvider;
