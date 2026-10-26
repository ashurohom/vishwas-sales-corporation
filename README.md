# Vishwas Sales Corporation - Official Web Application

A modern, multi-page corporate website for **Vishwas Sales Corporation** (Since 1985), built using **React 19**, **React Router 7**, **Vite 6**, and **Tailwind CSS v4**.

---

## 🔤 Typography Specification

> [!IMPORTANT]
> **Single Unified Font Rule**: The entire website strictly uses **one single font family** across all pages, headings, body copy, navigation links, buttons, inputs, and modals.

| Property | Details |
| :--- | :--- |
| **Font Family** | **Plus Jakarta Sans** |
| **Fallback Stack** | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif` |
| **Provider** | Google Fonts (Loaded via preconnect in `index.html`) |
| **Enforcement** | Configured in `src/index.css` on `*`, `body`, `button`, `input`, `select`, `textarea` with `!important` to ensure universal consistency |
| **Weights Used** | `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold), `800` (Extra Bold / Black) |

---

## 🎨 Color Palette & Design System

The visual identity is based on the client's official brochure: deep corporate crimson red, contrasting slate charcoal, and crisp clean backgrounds.

### 1. Primary Brand Colors (Red Palette)
| Color Name | Hex Code | Tailwind Token | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Brand Red (Primary)** | `#DC2626` | `red-600` | Official logo checkmark & title, primary action buttons, active navigation indicator, key milestone statistics |
| **Brand Red Dark (Hover)** | `#B91C1C` | `red-700` | Button hover states, active press feedback |
| **Deep Red Accent** | `#991B1B` | `red-800` | Borders on dark banners, high-contrast highlights |
| **Rose Accent (Gradient)** | `#BE123C` | `rose-700` | CTA button gradient end: `from-red-600 to-rose-700` |
| **Red Light Tint** | `#FEF2F2` | `red-50` | Active navbar item pill background, badge backgrounds, icon container backdrops |
| **Red Soft Border** | `#FEE2E2` | `red-100` | Subtle tag borders, pill borders, highlight container outlines |

### 2. Corporate Neutral Tones (Dark Navy & Slate)
| Color Name | Hex Code | Tailwind Token | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Obsidian Slate (Darkest)** | `#020617` | `slate-950` | Top credential bar, hero background, footer base |
| **Deep Corporate Charcoal** | `#0F172A` | `slate-900` | Secondary dark sections, dark cards, section highlights |
| **Muted Dark Slate** | `#1E293B` | `slate-800` | Dark card borders, divider lines on dark banners |
| **Charcoal Heading** | `#0F172A` | `slate-900` | All primary page headings (`<h1>`, `<h2>`, `<h3>`) |
| **Body Text Primary** | `#334155` | `slate-700` | Main readable body paragraphs, navigation link defaults |
| **Body Text Secondary** | `#64748B` | `slate-500` | Subtitles, meta labels, timestamps, card descriptions |
| **Muted Label / Placeholder** | `#94A3B8` | `slate-400` | Form placeholders, inactive icons, breadcrumbs |

### 3. Surface & Canvas Colors
| Color Name | Hex Code | Tailwind Token | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Pure White** | `#FFFFFF` | `white` | Main card backgrounds, desktop navbar bar, modal surfaces |
| **Canvas Background** | `#F8FAFC` | `slate-50` | Universal page background canvas, form field backgrounds |
| **Light Divider / Rule** | `#F1F5F9` | `slate-100` | Card internal dividers, subtle separators |
| **Structural Border** | `#E2E8F0` | `slate-200` | Outer card borders, input borders, table borders |

### 4. Functional Semantic Accents
| Color Name | Hex Code | Tailwind Token | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Emerald Green** | `#059669` | `emerald-600` | "100% Quality Assured", Energy Savings badges, Success confirmations |
| **Amber Gold** | `#D97706` | `amber-600` | Dewatering pump rental badges, emergency hotline alerts |
| **Engineering Blue** | `#2563EB` | `blue-600` | Turnkey booster installation tags, water technology badges |

---

## 🧭 Multi-Page Navigation & Structure

Every navbar button opens its own dedicated, standalone page with client-side routing and automatic scroll-to-top:

| Page | Route | Description |
| :--- | :--- | :--- |
| **Home** | `/` | Hero section, 4 Decades legacy overview, "Our Promises", service previews, and featured brands |
| **About Us** | `/about` | Over 40 Years of History (Since 1985), the 6 Core Pillars, in-house technical workshop, and CREDAI / BAI / MEA / MBVA accreditations |
| **Products** | `/products` | Filterable and searchable catalog: C.R.I. Pumps, Raksha Pipes, Ashirvad, Leader Valves, Sintex, Kohler, WAASOL Solar, and Chamber Covers |
| **Services** | `/services` | Dedicated breakdowns for Pump Repairs, Turnkey Installation, Dewatering Rentals, On-Call Mechanics, Standby Backup Pumps, and Society Energy Audits |
| **Clients & Dealers** | `/clients` | 800+ Dealer Network across Maharashtra, 60+ leading real estate builders & hospitals roster, and dealership application |
| **Catalogues** | `/catalogues` | Technical datasheets, pump performance curves, and downloadable PDF catalogues |
| **PriceList** | `/pricelist` | Wholesale rate cards, contractor discounts, and instant WhatsApp price list dispatch |
| **FAQ's** | `/faqs` | Answers covering society pump breakdowns, standby pumps, energy savings, warranty, and dealership |
| **Contact Us** | `/contact` | Corporate office & workshop in Hadapsar (Pune-Solapur Rd), direct phone hotlines, and interactive inquiry desk |

---

## 🏢 Company Profile & Credentials

- **Company Name**: Vishwas Sales Corporation
- **Tagline**: Pune's Leading Company in Plumbing & Pumping Solutions..!
- **Established**: 1985 (Over 40 Years of Experience / Completed 4 Decades)
- **Active Dealer Network**: 800+ Dealers in Pune District & Maharashtra
- **Accredited Memberships**:
  - **CREDAI PUNE METRO**
  - **BAI** (Builders Association of India)
  - **MEA** (Maratha Entrepreneurs Association)
  - **MBVA** (Maharashtra Builders Vendors Association)
- **Head Office**: 9, Vishwas Complex, Pune-Solapur Road, Near HP Petrol Pump, Gadital, Hadapsar, Pune 411028
- **Helpline Numbers**: +91 9923 12 2448 / +91 9422 80 2448
- **Email**: vishwassalescorporation@gmail.com

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
