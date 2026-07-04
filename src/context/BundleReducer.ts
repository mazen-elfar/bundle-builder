import type { BundleState, BundleAction } from '../types';

export const initialState: BundleState = {
  currentStep: 0,
  selections: {},
};

export const bundleReducer = (state: BundleState, action: BundleAction): BundleState => {
  switch (action.type) {
    default:
      return state;
  }
};
