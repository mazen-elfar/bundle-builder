export interface Variant {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  category: "camera" | "sensor" | "accessory" | "plan" | "shipping";
  name: string;
  description: string;
  image: string;
  badge?: string | null;
  price: number;
  compareAtPrice?: number | null;
  learnMore: string;
  variants: Variant[];
}

export type ProductCategory = Product["category"];
