import wyzeCamV4 from "../assets/images/7377c4c026acb3c476e41ccec1e0376490ee2cb9.png";
import wyzeCamPanV3 from "../assets/images/6e1650a4902c8e51d612c6363434bb36c8d74688.png";
import wyzeFloodlightV2 from "../assets/images/96d92fa4f08e0bdd9fa6fd7b1e59231ec3d3d38b.png";
import wyzeDuoCamDoorbell from "../assets/images/0d7c4e5400ad8bef25d0ac786f415794250cefd5.png";
import wyzeBatteryCamPro from "../assets/images/25ced552047f1e871354f9620f3a60c5948b3b1a.png";

export const products = [
  {
    id: "wyze-cam-v4",
    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    image: wyzeCamV4,
    badge: "Save 22%",
    price: 27.98,
    compareAtPrice: 35.98,
    variants: [
      { id: "wyze-cam-v4-white", name: "White", color: "#FFFFFF" },
      { id: "wyze-cam-v4-grey", name: "Grey", color: "#9E9E9E" },
      { id: "wyze-cam-v4-black", name: "Black", color: "#212121" },
    ],
    defaultVariant: "wyze-cam-v4-white",
    quantity: 1,
  },
  {
    id: "wyze-cam-pan-v3",
    name: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    image: wyzeCamPanV3,
    badge: "Save 12%",
    price: 34.98,
    compareAtPrice: 39.98,
    variants: [
      { id: "wyze-cam-pan-v3-white", name: "White", color: "#FFFFFF" },
      { id: "wyze-cam-pan-v3-black", name: "Black", color: "#212121" },
    ],
    defaultVariant: "wyze-cam-pan-v3-white",
    quantity: 2,
  },
  {
    id: "wyze-cam-floodlight-v2",
    name: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with a 160° wide-angle view for your garage.",
    image: wyzeFloodlightV2,
    badge: "Save 22%",
    price: 69.98,
    compareAtPrice: 89.98,
    variants: [
      { id: "wyze-cam-floodlight-v2-white", name: "White", color: "#FFFFFF" },
      { id: "wyze-cam-floodlight-v2-black", name: "Black", color: "#212121" },
    ],
    defaultVariant: "wyze-cam-floodlight-v2-white",
    quantity: 0,
  },
  {
    id: "wyze-duo-cam-doorbell",
    name: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    image: wyzeDuoCamDoorbell,
    badge: null,
    price: 69.98,
    compareAtPrice: null,
    variants: [],
    defaultVariant: null,
    quantity: 0,
  },
  {
    id: "wyze-battery-cam-pro",
    name: "Wyze Battery Cam Pro",
    description: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    image: wyzeBatteryCamPro,
    badge: null,
    price: 89.98,
    compareAtPrice: null,
    variants: [
      { id: "wyze-battery-cam-pro-white", name: "White", color: "#FFFFFF" },
      { id: "wyze-battery-cam-pro-black", name: "Black", color: "#212121" },
    ],
    defaultVariant: "wyze-battery-cam-pro-white",
    quantity: 0,
  },
];
