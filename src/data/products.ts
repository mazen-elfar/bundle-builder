import type { Product } from "../types/product";

import wyzeCamV4 from "../assets/images/7377c4c026acb3c476e41ccec1e0376490ee2cb9.png";
import wyzeCamPanV3 from "../assets/images/6e1650a4902c8e51d612c6363434bb36c8d74688.png";
import wyzeFloodlightV2 from "../assets/images/96d92fa4f08e0bdd9fa6fd7b1e59231ec3d3d38b.png";
import wyzeDuoCamDoorbell from "../assets/images/0d7c4e5400ad8bef25d0ac786f415794250cefd5.png";
import wyzeBatteryCamPro from "../assets/images/25ced552047f1e871354f9620f3a60c5948b3b1a.png";

import v4Grey from "../assets/img-selector/wyze-cam-v4/variant-white.png";
import v4Black from "../assets/img-selector/wyze-cam-v4/variant-grey.png";
import v4White from "../assets/img-selector/wyze-cam-v4/variant-black.png";

import panWhite from "../assets/img-selector/wyze-cam-pan-v3/variant-white.png";
import panBlack from "../assets/img-selector/wyze-cam-pan-v3/variant-black.png";

import floodWhite from "../assets/img-selector/wyze-cam-floodlight-v2/variant-white.png";
import floodBlack from "../assets/img-selector/wyze-cam-floodlight-v2/variant-black.png";

import batteryWhite from "../assets/img-selector/wyze-battery-cam-pro/variant-white.png";
import batteryBlack from "../assets/img-selector/wyze-battery-cam-pro/variant-black.png";

import sensorMotion from "../assets/images/822f111b8d7505688a09b4d01cc536f6f009a8cd.png";
import sensorDoor from "../assets/images/c5d210d5bb593396f4f1f51b5f3538c79613ef44.png";
import sensorLeak from "../assets/images/9f076fc4511198593abbc00cec845119c27f4406.png";

export const products: Product[] = [
  // ──────────────────────────────────────────
  // CAMERAS
  // ──────────────────────────────────────────
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
      { id: "wyze-cam-v4-white", name: "White", image: v4White },
      { id: "wyze-cam-v4-grey", name: "Grey", image: v4Grey },
      { id: "wyze-cam-v4-black", name: "Black", image: v4Black },
    ],
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
      { id: "wyze-cam-pan-v3-white", name: "White", image: panWhite },
      { id: "wyze-cam-pan-v3-black", name: "Black", image: panBlack },
    ],
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
      { id: "wyze-cam-floodlight-v2-white", name: "White", image: floodWhite },
      { id: "wyze-cam-floodlight-v2-black", name: "Black", image: floodBlack },
    ],
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
      { id: "wyze-battery-cam-pro-white", name: "White", image: batteryWhite },
      { id: "wyze-battery-cam-pro-black", name: "Black", image: batteryBlack },
    ],
  },

  // ──────────────────────────────────────────
  // SENSORS
  // ──────────────────────────────────────────
  {
    id: "wyze-sense-motion",
    category: "sensor",
    name: "Wyze Sense Motion Sensor",
    description: "Detects motion in any room. Sends alerts straight to your phone.",
    image: sensorMotion,
    badge: "Save 20%",
    price: 7.98,
    compareAtPrice: 9.98,
    learnMore: "#",
    variants: [],
  },
  {
    id: "wyze-sense-door",
    category: "sensor",
    name: "Wyze Sense Door Sensor",
    description: "Know when doors and windows open or close.",
    image: sensorDoor,
    badge: "Save 20%",
    price: 7.98,
    compareAtPrice: 9.98,
    learnMore: "#",
    variants: [],
  },
  {
    id: "wyze-sense-leak",
    category: "sensor",
    name: "Wyze Sense Leak Sensor",
    description: "Get notified the moment water is detected.",
    image: sensorLeak,
    badge: null,
    price: 11.98,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },

  // ──────────────────────────────────────────
  // ACCESSORIES
  // ──────────────────────────────────────────
  {
    id: "wyze-camera-mount",
    category: "accessory",
    name: "Wyze Camera Magnetic Mount",
    description: "Stick it anywhere. Move it anytime.",
    image: wyzeCamV4,
    badge: null,
    price: 5.99,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },
  {
    id: "wyze-camera-power-supply",
    category: "accessory",
    name: "Wyze 5V USB Power Supply",
    description: "Extra power adapter for your Wyze cameras.",
    image: wyzeCamV4,
    badge: null,
    price: 9.99,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },

  // ──────────────────────────────────────────
  // PLAN
  // ──────────────────────────────────────────
  {
    id: "cam-plus-lite",
    category: "plan",
    name: "Cam Plus Lite",
    description: "Person detection and 12-second cloud recordings.",
    image: wyzeCamV4,
    badge: null,
    price: 1.99,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },
  {
    id: "cam-plus",
    category: "plan",
    name: "Cam Plus",
    description: "Full-length cloud recordings with AI detection.",
    image: wyzeCamV4,
    badge: "Popular",
    price: 2.99,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },
  {
    id: "cam-plus-pro",
    category: "plan",
    name: "Cam Plus Pro",
    description: "Professional monitoring with priority support.",
    image: wyzeCamV4,
    badge: null,
    price: 7.99,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },

  // ──────────────────────────────────────────
  // SHIPPING
  // ──────────────────────────────────────────
  {
    id: "shipping-standard",
    category: "shipping",
    name: "Standard Shipping",
    description: "Delivered in 5–7 business days.",
    image: wyzeCamV4,
    badge: null,
    price: 0,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },
  {
    id: "shipping-express",
    category: "shipping",
    name: "Express Shipping",
    description: "Delivered in 2–3 business days.",
    image: wyzeCamV4,
    badge: null,
    price: 9.99,
    compareAtPrice: null,
    learnMore: "#",
    variants: [],
  },
];
