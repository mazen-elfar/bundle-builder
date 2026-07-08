export const BUNDLE_STORAGE_KEY = "bundle-builder:state";

export const MAX_QUANTITY_PER_PRODUCT = 10;

export const CATEGORY_LABELS: Record<string, string> = {
  camera: "CAMERAS",
  sensor: "SENSORS",
  accessory: "ACCESSORIES",
  plan: "PLAN",
  shipping: "",
};

export const CATEGORY_ORDER = ["camera", "sensor", "accessory", "plan", "shipping"] as const;
