<p align="center">
  <picture>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </picture>
</p>

<h1 align="center">Bundle Builder</h1>

<p align="center">
  An interactive security system bundle configurator — built with <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS v4</strong>.
  <br />
  Configure cameras, sensors, accessories, and subscription plans through a step-by-step accordion interface with live pricing and a real-time review panel.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#building">Building</a>
</p>

---

## Features

<table>
  <tr>
    <td align="center">🎯</td>
    <td><strong>Multi-step accordion builder</strong></td>
    <td>Four expandable steps — Cameras, Sensors, Accessories, Plan — with selection counts per step.</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><strong>Product variant selection</strong></td>
    <td>Color and finish options with dynamic image swapping per variant.</td>
  </tr>
  <tr>
    <td align="center">🔢</td>
    <td><strong>Quantity management</strong></td>
    <td>Increment/decrement steppers with per-product caps (max 10).</td>
  </tr>
  <tr>
    <td align="center">🔄</td>
    <td><strong>Plan toggle</strong></td>
    <td>iOS-style toggle switch for subscription plans; mutual exclusion enforced (only one active plan).</td>
  </tr>
  <tr>
    <td align="center">📋</td>
    <td><strong>Live review panel</strong></td>
    <td>Real-time summary grouped by category with inline controls and price breakdown.</td>
  </tr>
  <tr>
    <td align="center">💰</td>
    <td><strong>Pricing engine</strong></td>
    <td>Automatic subtotal, compare-at total, savings, and monthly payment calculations.</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Responsive design</strong></td>
    <td>Desktop (1440px) and mobile (390px) breakpoints with adaptive layout and typography.</td>
  </tr>
  <tr>
    <td align="center">💾</td>
    <td><strong>LocalStorage persistence</strong></td>
    <td>"Save my system for later" with automatic restoration on page load.</td>
  </tr>
</table>

---

## Demo

### Live Demo

[https://bundle-builder-three.vercel.app/](https://bundle-builder-three.vercel.app/)

### GitHub Repository

[https://github.com/mazen-elfar/bundle-builder](https://github.com/mazen-elfar/bundle-builder)

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [React 19](https://react.dev/) with [React Compiler](https://react.dev/learn/react-compiler) (automatic memoization) |
| **Language** | [TypeScript 6.0](https://www.typescriptlang.org/) |
| **Build tool** | [Vite 8.1](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS custom properties |
| **Linting** | [oxlint](https://oxc.rs/) (Rust-based, blazing fast) |
| **State management** | React Context + `useReducer` |
| **Font** | Gilroy (Medium 500, SemiBold 600) |

---

## Getting Started

### Prerequisites

- **Node.js** >= 20
- **npm** >= 10

### Installation

```bash
# Clone the repository
git clone https://github.com/mazen-elfar/bundle-builder.git

# Navigate into the project
cd bundle-builder

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | TypeScript type-check + production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint static analysis |

---

## Architecture

### State Management

The application uses a **unidirectional data flow** pattern with React Context and `useReducer`:

```
User action → dispatch(BundleAction) → bundleReducer → new BundleState → re-render
```

All derived data (subtotal, review items, monthly payment, savings) is computed on-the-fly via **memoized callbacks** in `BundleContext`, ensuring synchronization is never a concern.

### Action Types

| Action | Description |
|--------|-------------|
| `SET_STEP` | Open or close an accordion step |
| `SELECT_VARIANT` | Change the active variant for a product (e.g., color) |
| `INCREMENT_VARIANT` | Increase quantity for a product variant (capped at 10) |
| `DECREMENT_VARIANT` | Decrease quantity for a product variant (floor at 0) |
| `SELECT_PLAN` | Toggle a subscription plan on/off — enforces mutual exclusion |
| `RESET` | Reset all selections to the initial state |
| `RESTORE` | Restore a previously saved state from localStorage |

### Product Categories

| Category | Products | Behavior |
|----------|----------|----------|
| **Cameras** | 5 products with 2–3 color variants | Quantity stepper + variant selector |
| **Sensors** | 3 products (motion, door, leak) | Quantity stepper, no variants |
| **Accessories** | 2 products (mount, power supply) | Quantity stepper, no variants |
| **Plan** | 3 subscription tiers (Lite, Plus, Pro) | Toggle switch, mutually exclusive |
| **Shipping** | 2 options (standard, express) | Static informational row in review panel |

---

## Component Tree

```
<BundleProvider>
  <BundleBuilderPage>
    <MainLayout>
      │
      ├── <Builder>                          ← Left panel (768px)
      │     └── <Step> → <Accordion>         ×4
      │           ├── <AccordionHeader />     Icon, title, selection count, chevron
      │           └── <AccordionContent>       Visible when step is open
      │                 ├── <ProductGrid>
      │                 │     └── <ProductCard>  ×2–5 per category
      │                 │           ├── <Badge />                  Sale/popular badge
      │                 │           ├── <ProductInfo />            Name, description
      │                 │           ├── <ProductVariants>          Color selectors
      │                 │           │     └── <VariantOption />    ×n
      │                 │           ├── <QuantityStepper />        – 1 + (or <AddPlanButton />)
      │                 │           └── <ProductPrice />           Price display
      │                 └── <BuilderFooter />    "Next: …" navigation
      │
      └── <ReviewPanel>                      ← Right panel (399px)
            ├── <ReviewHeader />
            └── <ReviewContent>
                  ├── "Your security system" intro
                  ├── <ReviewCategory>         ×n (one per selected category)
                  │     └── <ReviewItem>       ×n
                  │           ├── <ReviewQuantityStepper />  (or <ReviewPlanToggle />)
                  │           └── Price
                  ├── <FastShippingRow />      Static $5.99 → FREE row
                  └── <ReviewSummary>
                        ├── <SummaryPricing />      Guarantee + monthly + totals
                        ├── <SummaryCheckout />    Checkout button
                        └── <SaveForLater />        Persist to localStorage
</BundleProvider>
```

---

## Design Decisions

Several key decisions shaped the architecture and implementation:

- **Data-driven architecture** — The product catalog and step definitions are sourced from local JSON data files, making it straightforward to add, remove, or reorder products and steps without touching any component logic.
- **Per-variant quantity storage** — Quantities are stored independently for every product variant within the state, enabling granular tracking and preventing accidental cross-variant quantity merging.
- **Unified state synchronization** — The Review Panel is fully synchronized with the Builder through React Context and `useReducer`. Any change in the builder immediately reflects in the review panel without additional wiring.
- **Plan toggle instead of quantity stepper** — Subscription plans use a toggle switch rather than a quantity stepper because only one plan can be active at a time. This simplifies the UI and enforces mutual exclusion at the reducer level.
- **LocalStorage persistence** — Bundle state is persisted to LocalStorage via the "Save my system for later" action, allowing users to return to their configuration across sessions.
- **Reusable component architecture** — UI primitives (Badge, Button, Card, SectionTitle) and business components (QuantityStepper, ProductVariants, ReviewItem) are designed to be composable and maintainable, reducing duplication across the codebase.

---

## Project Structure

```
src/
├── App.tsx                                    # Root application component
├── main.tsx                                   # Application entry point
├── index.css                                  # Tailwind import + global styles
│
├── assets/
│   ├── fonts/                                 # Gilroy typeface files
│   ├── icons-According/                       # Accordion, shipping, and UI icons
│   ├── images/                                # Product imagery
│   └── img-selector/                          # Variant-specific images per product
│
├── components/
│   ├── accordion/                             # Accordion container, header, content
│   ├── add-plan-button/                       # Toggle switch for plan selection
│   ├── builder/                               # Builder root, step wrapper, product grid, footer
│   ├── product-card/                          # Product card, info panel, price display
│   ├── product-variants/                      # Variant selector row and individual options
│   ├── quantity-stepper/                      # Reusable – quantity stepper
│   ├── review-panel/                          # Review sidebar: panel, categories, items, shipping
│   ├── review-quantity-stepper/               # Review-specific quantity controls
│   ├── review-summary/                        # Pricing summary, checkout, save for later
│   └── ui/                                    # Generic primitives: badge, button, card, section title
│
├── constants/                                 # App-wide constants (storage keys, limits, labels)
├── context/                                   # BundleContext, BundleProvider, BundleReducer
├── data/                                      # Static data: product catalog, step definitions
├── hooks/                                     # Custom React hooks (useLocalStorage)
├── layouts/                                   # Page layout components (MainLayout)
├── pages/                                     # Route pages (BundleBuilderPage)
├── styles/                                    # Token definitions, resets, typography utilities, fonts
├── types/                                     # TypeScript type definitions and interfaces
└── utils/                                     # Utility functions (storage, formatting, calculations)
```

---

## Styling System

The design system is built on **CSS custom properties** defined in `styles/tokens.css`:

- **Colors** — `--color-primary` (purple `#4E2FD2`), `--color-success` (green `#0AA288`), surface, divider, background, and text tokens
- **Typography** — Gilroy font family at 500 (Medium) and 600 (SemiBold) weights
- **Spacing** — Consistent `gap`, `padding`, and `margin` values throughout
- **Responsive** — Single breakpoint at `max-sm: 390px` for mobile layouts

---

## Building for Production

```bash
npm run build
```

This runs:
1. **TypeScript type-checking** (`tsc -b`) — catches type errors
2. **Vite production build** — tree-shaking, code splitting, asset hashing, and minification

Output is written to the `dist/` directory and can be served with any static file server.

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |

---

## Notes

This project was built as part of a Frontend React Coding Exercise. Key highlights:

- **Pixel-perfect implementation** based on the provided Figma design, with careful attention to spacing, typography, color tokens, and component states.
- **Fully responsive** — Desktop (1440px) and mobile (390px) layouts with adaptive grid, typography, and spacing.
- **Live synchronized review panel** — Every selection, quantity change, or plan toggle updates the review panel in real time without any manual refresh.
- **Variant-specific quantity management** — Quantities are tracked per variant, enabling precise control over each product configuration.
- **LocalStorage persistence** — Users can save their entire bundle configuration and restore it on return.
- **Component-based architecture** — Reusable UI primitives and business components keep the codebase clean, maintainable, and scalable.

---

<p align="center">
  Built by <a href="https://github.com/mazen-elfar">mazen-elfar</a>
</p>
