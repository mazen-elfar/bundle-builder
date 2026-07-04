export interface BundleSelection {
  productId: string;
  variantId?: string;
  quantity: number;
}

export interface BundleState {
  currentStep: number;
  selections: Record<string, BundleSelection>;
}

export type BundleAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'ADD_SELECTION'; payload: BundleSelection }
  | { type: 'REMOVE_SELECTION'; payload: string }
  | { type: 'RESET' };
