---
name: Security Review Ready
colors:
  surface: '#fafaf4'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ef'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e2e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#404943'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#707972'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694d'
  primary: '#074e34'
  on-primary: '#ffffff'
  primary-container: '#28664a'
  on-primary-container: '#a1e1be'
  inverse-primary: '#95d4b1'
  secondary: '#566155'
  on-secondary: '#ffffff'
  secondary-container: '#dae6d6'
  on-secondary-container: '#5c675b'
  tertiary: '#1a4c35'
  on-tertiary: '#ffffff'
  tertiary-container: '#33644b'
  on-tertiary-container: '#aadfc0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f1cd'
  primary-fixed-dim: '#95d4b1'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#0d5137'
  secondary-fixed: '#dae6d6'
  secondary-fixed-dim: '#becabb'
  on-secondary-fixed: '#141e14'
  on-secondary-fixed-variant: '#3f4a3e'
  tertiary-fixed: '#b9efcf'
  tertiary-fixed-dim: '#9ed2b4'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#1e5038'
  background: '#fafaf4'
  on-background: '#1a1c19'
  surface-variant: '#e2e3de'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 38px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects quiet authority, rigorous precision, and editorial clarity. Built for enterprise security leads, CTOs, and compliance officers navigating vendor assessments, the interface replaces SaaS hyperactivity with calm, structural confidence. The aesthetic leans on high-craft minimalism: generous open surfaces, strict typographic hierarchy, and razor-sharp, mechanical border definitions reminiscent of technical broadsheets and tactile paper stationery.

Visual rules:
- Strictly reject glowing orb backgrounds, decorative blurred blobs, multi-stop neon gradients, and simulated glass cards.
- Embrace structural integrity: 1px hairline rules, crisp surface contrast, and data-dense, functional layouts.
- Evoke an editorial, bookish sensibility blended with the mechanical rigor of high-end developer instrumentation (inspired by Linear, Stripe Press, Ramp, and Notion).

## Colors

The palette relies on organic, physical materials: warm unbleached paper, archival ink, and deep botanical greens. Contrast is deliberate and natural rather than starkly synthetic.

### Roles & Applications
- **Canvas Base (`#FAF9F6`)**: The primary unvarnished viewport tone. Sets a tactile, deliberate editorial warmth.
- **Surface Elevation (`#FFFFFF` & `#F5F4EE`)**: Crisp white is reserved for high-priority interactive cards and mockups to produce subtle figure-ground separation; warm off-white provides recessed grounding for nested modules and callouts.
- **Primary Ink (`#20221F`)**: Deep carbon near-black for primary display text, metric readouts, and active icon states.
- **Secondary Ink (`#696B66`)**: Muted charcoal for descriptions, metadata, table labels, and inactive iconography. Must maintain WCAG AA contrast against both canvas and surface tones.
- **Structural Lines (`#E7E5DE`)**: Strict 1px division rules, panel borders, and cell grids.
- **Primary Accent (`#28664A`)**: Deep forest green used exclusively for intentional interactive triggers, verified status markers, and pivotal anchors.
- **Secondary Accent (`#DCE8D8`)**: Pale sage for subtle containment fills, badge backdrops, and active toggle rails.
- **Status & Badges (`#EBF3EA` fill with `#1B4D36` label)**: Understated success indicators and compliance readiness tags.

## Typography

Typographic scale centers on `Geist`—a neutral, hyper-legible sans-serif with geometric precision and crisp rendering across dense UI patterns. Pair with `JetBrains Mono` strictly for cryptographic fingerprints, SOC2 control IDs, JSON payloads, and policy artifact keys.

Key typographic rules:
- Restrict font weights to 400 (regular body), 500 (subheadings, table headers, interactive controls), and 600 (structural section heads and micro-labels). Avoid bold/extra-bold weights to sustain an understated, editorial cadence.
- Apply negative tracking (`letterSpacing`) to headings 22px and larger to prevent visual drift.
- Maintain a generous line-height on all descriptive copy (1.55–1.6× font size) to mirror high-grade print editorial standards.
- Micro-labels (`label-sm`) use uppercase sparingly and require slight positive tracking (`0.04em`) for legibility in dense audit logs.

## Layout & Spacing

The layout model implements a structured, column-based fluid grid governed by crisp 1px division rules. Rhythm is modular, prioritizing breathing room around focal enterprise mockups while maintaining rigorous mathematical alignment.

### Grid Architecture
- **Desktop (>= 1024px)**: 12-column grid with a max-width container of `1200px`. Gutters set to `1.5rem`, outer canvas margins set to `3rem` (expanding to auto-centering beyond `1280px`).
- **Tablet (768px - 1023px)**: 8-column grid, `1.5rem` gutters, `2rem` margins.
- **Mobile (< 768px)**: 4-column grid, `1rem` gutters, `1.25rem` outer margins. Reflow two-column card comparisons into vertical single-column stacks.

### Rhythm & Alignment
- Vertical rhythm follows an 8px base increment (`space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px).
- Section divisions rely on deliberate `margin-bottom` spacing (`5rem` to `7rem` on desktop) punctuated by full-width 1px `#E7E5DE` border lines rather than color-blocked bands.

## Elevation & Depth

Visual hierarchy rejects artificial elevation models and ambient drop shadows. Depth is achieved purely through layered tonal planes and crisp, technical borders.

### Rules of Depth
- **Zero Heavy Shadows**: No multi-stop fuzzy blur shadows. Elevated floating components (dropdowns, tooltips, popovers) utilize a crisp 1px border of `#E7E5DE` coupled with an ultra-fine tactile contact shadow: `0 1px 3px rgba(32, 34, 31, 0.04), 0 4px 12px rgba(32, 34, 31, 0.03)`.
- **Surface Containment**: Contrast is generated by placing `#FFFFFF` cards over the `#FAF9F6` base canvas, bound by an unambiguous 1px line in `#E7E5DE`.
- **Recessed Insets**: Interactive code snippets, audit trail panels, and nested verification logs use `#F5F4EE` to communicate an embedded, durable surface tier.

## Shapes

The design uses a restrained, architectural corner geometry (Level 1: Soft). Elements feel chiseled, calibrated, and utilitarian rather than playful or bubbly.

### Implementation Standards
- **Standard UI Elements (`4px` / `0.25rem`)**: Applied to input controls, standard buttons, table cell selections, badges, and inline tags.
- **Large Panels & Enterprise Cards (`8px` / `0.5rem`)**: Applied to primary content containers, interactive product demo windows, and enterprise feature wrappers.
- **Full Modals & Artifact Previews (`12px` / `0.75rem`)**: The absolute maximum radius allowed across the system, preserving a structural, instrument-grade appearance.
- **Pills are strictly prohibited** for standard interactive buttons; pill radius (`9999px`) is permitted exclusively for status indicators and micro-badges.

## Components

### Buttons
- **Primary Action**: Background `#28664A`, text `#FFFFFF`, border `1px solid #1B4D36`, radius `4px`. Hover: `#1B4D36`. Height: 38px (desktop), 44px (mobile touch targets). Padding: `0 16px`. Weight: 500.
- **Secondary / Outline Action**: Background `#FFFFFF`, text `#20221F`, border `1px solid #E7E5DE`, radius `4px`. Hover: background `#F5F4EE`, border `#D4D2C9`.
- **Tertiary / Ghost**: Transparent background, text `#696B66`, no border. Hover: text `#20221F`.

### Badges & Status Chips
- **Compliance Verified / Ready**: Background `#EBF3EA`, text `#1B4D36`, border `1px solid #DCE8D8`, radius `9999px`. Font: `label-sm` (`11px`, 600 weight). Padding: `2px 8px`. Accompanied by a 6px solid `#28664A` status pip.
- **Neutral Audit Category**: Background `#F5F4EE`, text `#696B66`, border `1px solid #E7E5DE`, radius `4px`.

### Cards & Surfaces
- **Interactive Feature Card**: Canvas `#FFFFFF`, border `1px solid #E7E5DE`, radius `8px`, padding `space-lg` (24px). Hover state triggers no vertical jump; border darkens gracefully to `#D4D2C9`.
- **Data Table Containers**: Enclosed in a single `#E7E5DE` border with row dividers (`1px solid #E7E5DE`). Table header background `#FAF9F6`, text `label-md` `#696B66`. Row hover: `#F5F4EE`.

### Form Fields & Inputs
- **Text Inputs**: Height 38px, background `#FFFFFF`, border `1px solid #E7E5DE`, radius `4px`, text `body-md` `#20221F`. Placeholder text: `#696B66`. Focus state: border `1px solid #28664A`, zero fuzzy glow rings (use an exact 1px crisp outline offset).

### Selection Controls (Checkboxes & Radios)
- **Checkboxes**: 16×16px square, radius `3px`, border `1px solid #D4D2C9`, background `#FFFFFF`. Checked state: background `#28664A`, border `#28664A`, checkmark icon in `#FFFFFF`.

### Enterprise Product Mockups
- **Window Frames**: Representing real software rather than conceptual abstractions. Outer frame utilizes a crisp `#E7E5DE` border, `#FFFFFF` interior body, and a clean toolbar partitioned with vertical 1px divider lines. Typography inside mockups remains pinned to `12px` and `13px` with actual vendor review metrics (e.g., "SOC 2 Type II", "CAIQ v4", "ISO 27001", "Pen Test 2024").