export interface Variant {
  id: string;
  name: string;
  image: string;
}
export interface Product {
  id: string;

  category: "camera" | "sensor" | "accessory" | "plan";

  name: string;

  description: string;

  image: string;

  badge?: string | null;

  price: number;

  compareAtPrice?: number | null;

  learnMore: string;

  variants: Variant[];

  selectedVariant?: string | null;

  quantity: number;

  isSelected: boolean;
}