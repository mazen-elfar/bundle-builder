import { products } from "../data/products";
import type { BundleState } from "../types";

export const calculateSubtotal = (state: BundleState): number => {
  let total = 0;
  for (const [productId, sel] of Object.entries(state.selections)) {
    const product = products.find((p) => p.id === productId);
    if (!product) continue;
    for (const qty of Object.values(sel.variantQuantities)) {
      total += product.price * qty;
    }
  }
  return total;
};

export const calculateCompareAtTotal = (state: BundleState): number => {
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
};

export const calculateSavings = (state: BundleState): number => {
  return calculateCompareAtTotal(state) - calculateSubtotal(state);
};
