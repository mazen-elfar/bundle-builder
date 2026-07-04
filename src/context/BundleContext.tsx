import React, { createContext, useContext, useReducer } from 'react';
import { bundleReducer, initialState } from './BundleReducer';
import type { BundleState, BundleAction } from '../types';

interface BundleContextType {
  state: BundleState;
  dispatch: React.Dispatch<BundleAction>;
}

export const BundleContext = createContext<BundleContextType | undefined>(undefined);

export const useBundleContext = () => {
  const ctx = useContext(BundleContext);
  if (!ctx) throw new Error('useBundleContext must be used within BundleProvider');
  return ctx;
};
