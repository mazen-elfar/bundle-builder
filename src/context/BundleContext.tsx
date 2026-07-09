import React, { createContext, useContext, useCallback, useMemo } from "react";
import { useReducer } from "react";
import { bundleReducer, initialState } from "./BundleReducer";
import type { BundleState, BundleAction, ProductSelection } from "../types";
import type { Product } from "../types/product";
import { products } from "../data/products";
import { BUNDLE_STORAGE_KEY } from "../constants";
import { getStorageItem, setStorageItem } from "../utils/storage";

interface BundleContextType {
  state: BundleState;
  dispatch: React.Dispatch<BundleAction>;
  getProductSelection: (productId: string) => ProductSelection | undefined;
  getVariantQuantity: (productId: string, variantId: string) => number;
  getTotalQuantity: (productId: string) => number;
  isProductSelected: (productId: string) => boolean;
  getSelectedCount: (category: string) => number;
  getProductsByCategory: (category: string) => Product[];
  getReviewItems: () => { category: string; label: string; items: ReviewItemData[] }[];
  getSubtotal: () => number;
  getCompareAtTotal: () => number;
  getSavings: () => number;
  getMonthlyPayment: () => number;
  openStep: (stepId: number) => void;
  toggleStep: (stepId: number) => void;
  nextStep: () => void;
  saveSystem: () => void;
}

export interface ReviewItemData {
  product: Product;
  variantId: string;
  variantName: string;
  variantImage: string;
  quantity: number;
}

function loadSavedState(): BundleState | undefined {
  return getStorageItem<BundleState>(BUNDLE_STORAGE_KEY);
}

export const BundleContext = createContext<BundleContextType | undefined>(
  undefined
);

export const useBundleContext = () => {
  const ctx = useContext(BundleContext);
  if (!ctx)
    throw new Error("useBundleContext must be used within BundleProvider");
  return ctx;
};

export function BundleProvider({ children }: { children: React.ReactNode }) {
  const saved = useMemo(() => loadSavedState(), []);
  const [state, dispatch] = useReducer(
    bundleReducer,
    saved ?? initialState
  );

  const getProductSelection = useCallback(
    (productId: string) => state.selections[productId],
    [state.selections]
  );

  const getVariantQuantity = useCallback(
    (productId: string, variantId: string) => {
      const sel = state.selections[productId];
      return sel?.variantQuantities[variantId] ?? 0;
    },
    [state.selections]
  );

  const getTotalQuantity = useCallback(
    (productId: string) => {
      const sel = state.selections[productId];
      if (!sel) return 0;
      return Object.values(sel.variantQuantities).reduce(
        (sum, q) => sum + q,
        0
      );
    },
    [state.selections]
  );

  const isProductSelected = useCallback(
    (productId: string) => getTotalQuantity(productId) > 0,
    [getTotalQuantity]
  );

  const getSelectedCount = useCallback(
    (category: string) => {
      return products
        .filter((p) => p.category === category)
        .filter((p) => isProductSelected(p.id)).length;
    },
    [isProductSelected]
  );

  const getProductsByCategory = useCallback(
    (category: string) => products.filter((p) => p.category === category),
    []
  );

  const getReviewItems = useCallback(() => {
    const categoryOrder = ["camera", "sensor", "accessory", "plan", "shipping"] as const;
    const categoryLabels: Record<string, string> = {
      camera: "CAMERAS",
      sensor: "SENSORS",
      accessory: "ACCESSORIES",
      plan: "PLAN",
      shipping: "",
    };

    return categoryOrder
      .map((cat) => {
        const catProducts = products.filter((p) => p.category === cat);
        const items: ReviewItemData[] = [];

        for (const product of catProducts) {
          const sel = state.selections[product.id];
          if (!sel) continue;

          for (const [variantId, qty] of Object.entries(
            sel.variantQuantities
          )) {
            if (qty > 0) {
              const variant = product.variants.find((v) => v.id === variantId);
              const variantName =
                variant?.name ?? product.name;
              const variantImage =
                variant?.image ?? product.image;
              items.push({
                product,
                variantId,
                variantName,
                variantImage,
                quantity: qty,
              });
            }
          }
        }

        return { category: cat, label: categoryLabels[cat], items };
      })
      .filter((group) => group.items.length > 0);
  }, [state.selections]);

  const getSubtotal = useCallback(() => {
    let total = 0;
    for (const [productId, sel] of Object.entries(state.selections)) {
      const product = products.find((p) => p.id === productId);
      if (!product) continue;
      for (const qty of Object.values(sel.variantQuantities)) {
        total += product.price * qty;
      }
    }
    return total;
  }, [state.selections]);

  const getCompareAtTotal = useCallback(() => {
    let total = 0;
    for (const [productId, sel] of Object.entries(state.selections)) {
      const product = products.find((p) => p.id === productId);
      if (!product) continue;
      const compare = product.compareAtPrice ?? product.price;
      for (const qty of Object.values(sel.variantQuantities)) {
        total += compare * qty;
      }
    }
    return total;
  }, [state.selections]);

  const getSavings = useCallback(() => {
    return getCompareAtTotal() - getSubtotal();
  }, [getCompareAtTotal, getSubtotal]);

  const getMonthlyPayment = useCallback(() => {
    const subtotal = getSubtotal();
    return subtotal / 12;
  }, [getSubtotal]);

  const openStep = useCallback(
    (stepId: number) => {
      dispatch({ type: "SET_STEP", payload: stepId });
    },
    [dispatch]
  );

  const toggleStep = useCallback(
    (stepId: number) => {
      dispatch({
        type: "SET_STEP",
        payload: state.currentStep === stepId ? -1 : stepId,
      });
    },
    [dispatch, state.currentStep]
  );

  const nextStep = useCallback(() => {
    const next = state.currentStep + 1;
    dispatch({ type: "SET_STEP", payload: next });
  }, [dispatch, state.currentStep]);

  const saveSystem = useCallback(() => {
    setStorageItem(BUNDLE_STORAGE_KEY, state);
  }, [state]);

  const value: BundleContextType = useMemo(
    () => ({
      state,
      dispatch,
      getProductSelection,
      getVariantQuantity,
      getTotalQuantity,
      isProductSelected,
      getSelectedCount,
      getProductsByCategory,
      getReviewItems,
      getSubtotal,
      getCompareAtTotal,
      getSavings,
      getMonthlyPayment,
      openStep,
      toggleStep,
      nextStep,
      saveSystem,
    }),
    [
      state,
      dispatch,
      getProductSelection,
      getVariantQuantity,
      getTotalQuantity,
      isProductSelected,
      getSelectedCount,
      getProductsByCategory,
      getReviewItems,
      getSubtotal,
      getCompareAtTotal,
      getSavings,
      getMonthlyPayment,
      openStep,
      toggleStep,
      nextStep,
      saveSystem,
    ]
  );

  return (
    <BundleContext.Provider value={value}>{children}</BundleContext.Provider>
  );
}
