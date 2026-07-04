import type { BundleSelection } from '../types';

/**
 * Calculate the total price of all bundle selections.
 */
export const calculateTotal = (
  selections: Record<string, BundleSelection>,
  priceMap: Record<string, number>
): number => {
  return Object.values(selections).reduce((total, sel) => {
    const price = priceMap[sel.productId] ?? 0;
    return total + price * sel.quantity;
  }, 0);
};

/**
 * Calculate total savings vs. compare-at prices.
 */
export const calculateSavings = (
  selections: Record<string, BundleSelection>,
  priceMap: Record<string, number>,
  comparePriceMap: Record<string, number>
): number => {
  return Object.values(selections).reduce((savings, sel) => {
    const compare = comparePriceMap[sel.productId] ?? 0;
    const price = priceMap[sel.productId] ?? 0;
    return savings + (compare - price) * sel.quantity;
  }, 0);
};
