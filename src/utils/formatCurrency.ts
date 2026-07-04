/**
 * Format a numeric price to USD currency string.
 * @example formatCurrency(29.99) => "$29.99"
 */
export const formatCurrency = (amount: number, locale = 'en-US', currency = 'USD'): string => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
};
