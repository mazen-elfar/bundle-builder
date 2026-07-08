export interface VariantSelection {
  quantity: number;
}

export interface ProductSelection {
  selectedVariantId: string | null;
  variantQuantities: Record<string, number>;
}

export interface BundleState {
  currentStep: number;
  selections: Record<string, ProductSelection>;
}

export type BundleAction =
  | { type: "SET_STEP"; payload: number }
  | { type: "SELECT_VARIANT"; payload: { productId: string; variantId: string } }
  | { type: "INCREMENT_VARIANT"; payload: { productId: string; variantId: string } }
  | { type: "DECREMENT_VARIANT"; payload: { productId: string; variantId: string } }
  | { type: "RESET" }
  | { type: "RESTORE"; payload: BundleState };
