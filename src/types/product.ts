export interface Variant {
  id: string;
  name: string;
  color: string;
  image?: string;
}

export interface Variant  {
  id: string;
  category: "camera" | "sensor" | "accessory" | "plan";

  title: string;

  description: string;

  image: string;

  price: number;

  compareAtPrice?: number;

  badge?: string;

  learnMore?: string;

  variants?: Variant[];
}