import type { Product } from "../types/product";

// Product Images
import wyzeCamV4 from "../assets/images/7377c4c026acb3c476e41ccec1e0376490ee2cb9.png";
import wyzeCamPanV3 from "../assets/images/6e1650a4902c8e51d612c6363434bb36c8d74688.png";
import wyzeFloodlightV2 from "../assets/images/96d92fa4f08e0bdd9fa6fd7b1e59231ec3d3d38b.png";
import wyzeDuoCamDoorbell from "../assets/images/0d7c4e5400ad8bef25d0ac786f415794250cefd5.png";
import wyzeBatteryCamPro from "../assets/images/25ced552047f1e871354f9620f3a60c5948b3b1a.png";

// Variant Images
import v4White from "../assets/img-selector/wyze-cam-v4/variant-white.png";
import v4Grey from "../assets/img-selector/wyze-cam-v4/variant-grey.png";
import v4Black from "../assets/img-selector/wyze-cam-v4/variant-black.png";

import panWhite from "../assets/img-selector/wyze-cam-pan-v3/variant-white.png";
import panBlack from "../assets/img-selector/wyze-cam-pan-v3/variant-black.png";

import floodWhite from "../assets/img-selector/wyze-cam-floodlight-v2/variant-white.png";
import floodBlack from "../assets/img-selector/wyze-cam-floodlight-v2/variant-black.png";

import batteryWhite from "../assets/img-selector/wyze-battery-cam-pro/variant-white.png";
import batteryBlack from "../assets/img-selector/wyze-battery-cam-pro/variant-black.png";


export const products: Product[] = [
  {
    id: "wyze-cam-v4",
    category: "camera",

    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",

    image: wyzeCamV4,

    badge: "Save 22%",

    price: 27.98,
    compareAtPrice: 35.98,

    learnMore: "#",
variants: [
  {
    id: "wyze-cam-v4-white",
    name: "White",
    image: v4White,
  },
  {
    id: "wyze-cam-v4-grey",
    name: "Grey",
    image: v4Grey,
  },
  {
    id: "wyze-cam-v4-black",
    name: "Black",
    image: v4Black,
  },
],

    selectedVariant: "wyze-cam-v4-white",

    quantity: 1,

    isSelected: true,
  },

  {
    id: "wyze-cam-pan-v3",
    category: "camera",

    name: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",

    image: wyzeCamPanV3,

    badge: "Save 12%",

    price: 34.98,
    compareAtPrice: 39.98,

    learnMore: "#",
variants: [
  {
    id: "wyze-cam-pan-v3-white",
    name: "White",
    image: panWhite,
  },
  {
    id: "wyze-cam-pan-v3-black",
    name: "Black",
    image: panBlack,
  },
],

    selectedVariant: "wyze-cam-pan-v3-white",

    quantity: 2,

    isSelected: true,
  },

  {
    id: "wyze-cam-floodlight-v2",
    category: "camera",

    name: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with a 160° wide-angle view for your garage.",

    image: wyzeFloodlightV2,

    badge: "Save 22%",

    price: 69.98,
    compareAtPrice: 89.98,

    learnMore: "#",

    variants: [
  {
    id: "wyze-cam-floodlight-v2-white",
    name: "White",
    image: floodWhite,
  },
  {
    id: "wyze-cam-floodlight-v2-black",
    name: "Black",
    image: floodBlack,
  },
],

    selectedVariant: "wyze-cam-floodlight-v2-white",

    quantity: 0,

    isSelected: false,
  },

  {
    id: "wyze-duo-cam-doorbell",
    category: "camera",

    name: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",

    image: wyzeDuoCamDoorbell,

    badge: null,

    price: 69.98,
    compareAtPrice: null,

    learnMore: "#",

    variants: [],

    selectedVariant: null,

    quantity: 0,

    isSelected: false,
  },

  {
    id: "wyze-battery-cam-pro",
    category: "camera",

    name: "Wyze Battery Cam Pro",
    description:
      "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",

    image: wyzeBatteryCamPro,

    badge: null,

    price: 89.98,
    compareAtPrice: null,

    learnMore: "#",

    variants: [
  {
    id: "wyze-battery-cam-pro-white",
    name: "White",
    image: batteryWhite,
  },
  {
    id: "wyze-battery-cam-pro-black",
    name: "Black",
    image: batteryBlack,
  },
],

    selectedVariant: "wyze-battery-cam-pro-white",

    quantity: 0,

    isSelected: false,
  },
];