import type { BundleState, BundleAction, ProductSelection } from "../types";
import { products } from "../data/products";
import { MAX_QUANTITY_PER_PRODUCT } from "../constants";

function buildInitialSelections(): Record<string, ProductSelection> {
  const selections: Record<string, ProductSelection> = {};

  for (const product of products) {
    const hasVariants = product.variants.length > 0;
    const defaultVariantId = hasVariants ? product.variants[0].id : product.id;

    selections[product.id] = {
      selectedVariantId: defaultVariantId,
      variantQuantities: hasVariants
        ? Object.fromEntries(product.variants.map((v) => [v.id, 0]))
        : { [product.id]: 0 },
    };
  }

  selections["wyze-cam-v4"].variantQuantities["wyze-cam-v4-white"] = 1;
  selections["wyze-cam-pan-v3"].variantQuantities["wyze-cam-pan-v3-white"] = 2;

  return selections;
}

export const initialState: BundleState = {
  currentStep: 0,
  selections: buildInitialSelections(),
};

export const bundleReducer = (
  state: BundleState,
  action: BundleAction
): BundleState => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, currentStep: action.payload };

    case "SELECT_VARIANT": {
      const { productId, variantId } = action.payload;
      const existing = state.selections[productId];
      if (!existing) return state;
      return {
        ...state,
        selections: {
          ...state.selections,
          [productId]: { ...existing, selectedVariantId: variantId },
        },
      };
    }

    case "INCREMENT_VARIANT": {
      const { productId, variantId } = action.payload;
      const existing = state.selections[productId];
      if (!existing) return state;
      const current = existing.variantQuantities[variantId] ?? 0;
      if (current >= MAX_QUANTITY_PER_PRODUCT) return state;
      return {
        ...state,
        selections: {
          ...state.selections,
          [productId]: {
            ...existing,
            variantQuantities: {
              ...existing.variantQuantities,
              [variantId]: current + 1,
            },
          },
        },
      };
    }

    case "DECREMENT_VARIANT": {
      const { productId, variantId } = action.payload;
      const existing = state.selections[productId];
      if (!existing) return state;
      const current = existing.variantQuantities[variantId] ?? 0;
      if (current <= 0) return state;
      return {
        ...state,
        selections: {
          ...state.selections,
          [productId]: {
            ...existing,
            variantQuantities: {
              ...existing.variantQuantities,
              [variantId]: current - 1,
            },
          },
        },
      };
    }

    case "RESET":
      return initialState;

    case "RESTORE":
      return action.payload;

    default:
      return state;
  }
};
