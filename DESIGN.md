# Design System Specification: High-End AI Orchestration

## 1. Overview & Creative North Star: "The Obsidian Conductor"
This design system is built to convey the silent power of an AI orchestration engine. The Creative North Star, **"The Obsidian Conductor,"** represents a UI that feels less like a software tool and more like a high-end cinematic instrument. We reject the "standard dashboard" aesthetic in favor of deep, tonal immersion. 

The experience is defined by high-contrast typography, vast amounts of negative space, and a rejection of traditional structural lines. By utilizing intentional asymmetry and "impossible" layering, we create a sense of intelligent depth that mimics the complex, multi-dimensional nature of AI orchestration.

---

## 2. Colors: Tonal Depth & Atmospheric Light
The color palette moves away from flat hex codes and into "atmospheric layering." We use a base of obsidian and charcoal, accented by the electric energy of the AI core.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through:
*   **Background Shifts:** Transitioning from `surface` (#0b1326) to `surface_container_low` (#131b2e).
*   **Tonal Transitions:** Using padding and whitespace to separate content rather than a hard edge.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of frosted obsidian. 
*   **Base:** `surface` (#0b1326).
*   **Nested Elements:** Place a `surface_container_highest` (#2d3449) card inside a `surface_container_low` (#131b2e) section to create natural hierarchy without structural clutter.

### The "Glass & Gradient" Rule
To achieve a premium, futuristic feel:
*   **Glassmorphism:** For floating menus and modal overlays, use semi-transparent `surface_variant` with a 20px - 40px backdrop blur.
*   **Signature Textures:** Main CTAs and interactive nodes should utilize a subtle linear gradient from `primary` (#ddb7ff) to `primary_container` (#8d36db) at a 135-degree angle. This provides a "soul" to the interface that flat colors cannot replicate.

---

## 3. Typography: Editorial Authority
The typography system is designed to feel authoritative and precise. We pair a modern grotesque (Manrope) for high-impact display with a functional sans (Inter) for data-heavy orchestration tasks.

*   **Display & Headline (Manrope):** Bold weights with a **-2% to -4% letter spacing (tracking)**. This creates the "tight," premium look of high-end tech brands like Linear.
*   **Body (Inter):** Standard tracking with a generous line height (1.6x) to ensure readability against the dark backgrounds.
*   **The Hierarchy Strategy:** Large `display-lg` (3.5rem) headers should be used sparingly to anchor sections, followed by significant whitespace before the `body-lg` text begins. This creates an "editorial" rhythm.

---

## 4. Elevation & Depth: Tonal Layering
We move beyond shadows to define space. Depth is achieved by "stacking" light and opacity.

*   **The Layering Principle:** Use `surface_container_lowest` (#060e20) for the most distant backgrounds (the "canvas") and `surface_bright` (#31394d) for the most immediate foreground elements.
*   **Ambient Shadows:** If a floating effect is required, shadows must be extra-diffused. Use a 40px - 60px blur at 6% opacity. The shadow color must be a tinted version of `on_surface` (a faint purple-tinted shadow) to simulate natural light refraction from the UI’s glow.
*   **The "Ghost Border" Fallback:** If a container requires a perimeter for accessibility, use the `outline_variant` (#4a4455) at **15% opacity**. This creates a "suggestion" of an edge rather than a hard boundary.
*   **Edge Highlights:** For top-level cards, apply a 1px inner-shadow top-border using `primary` at 10% opacity to simulate a light source catching the "top edge" of the glass.

---

## 5. Components: Orchestration Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`). Border-radius: `md` (0.375rem). No shadow, but a subtle glow on hover using `surface_tint`.
*   **Secondary:** Ghost style. `outline_variant` at 20% opacity. Text in `on_surface`.
*   **Tertiary:** Text-only, using `secondary` (#89ceff) for a "high-tech blue" functional look.

### Input Fields & Search
*   **Background:** `surface_container_low` (#131b2e).
*   **States:** On focus, the `outline` should glow with a 2px `surface_tint` outer-glow, and the background shifts to `surface_container_high`.

### Orchestration Chips
*   **Style:** Small, pill-shaped (`full` roundedness).
*   **Selection:** Use `primary_container` with `on_primary_container` text. This indicates an "active" AI agent or node.

### Cards & Lists
*   **Rule:** **Forbid divider lines.** 
*   **Separation:** Separate list items by a 4px vertical gap using the `surface_container` hierarchy to differentiate rows.
*   **Imagery:** Use high-impact, cinematic imagery with a `surface_dim` overlay (20% opacity) to ensure text remains legible while maintaining the moody aesthetic.

### Additional Component: "The Orchestration Node"
A custom component for Octopus One. A `xl` rounded container using Glassmorphism. Inside, use a `primary_fixed_dim` pulsing icon to represent live AI activity.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme whitespace. If you think there is enough space, double it.
*   **Do** use `primary_fixed_dim` for icons to give them a "lit from within" appearance.
*   **Do** use subtle motion. Elements should fade and slide 10px upward when appearing.
*   **Do** align text-heavy content to a strict grid, but allow "hero" imagery or AI visualizations to break the grid and bleed off-edge.

### Don't
*   **Don't** use 100% white (#FFFFFF). Always use `on_surface` or `on_background` for a softer, premium look.
*   **Don't** use sharp corners. Use the `md` (0.375rem) or `lg` (0.5rem) tokens to keep the futuristic vibe "approachable."
*   **Don't** use pure black (#000000). It kills the depth. Use `surface_container_lowest` (#060e20).
*   **Don't** use traditional "Drop Shadows" from the 2010s. Use tonal shifts and ambient glows.