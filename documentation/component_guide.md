# Component Guide

## Pages

### `Home.jsx`
-   **Purpose:** Landing page for the platform.
-   **Key Features:** 
    -   Hero section with "Explore" CTA.
    -   Feature highlights (Hybrid, Real-time, Secure).
    -   Active Events list (cards with progress bars).

### `LiveEvent.jsx`
-   **Purpose:** The "Pressure" screen for live events (Projector view).
-   **Key Features:**
    -   **Thermometer:** Animated progress bar using `framer-motion`.
    -   **Live Feed:** Auto-scrolling list of new donations.
    -   **Confetti:** Full-screen overlay when a donation arrives.
    -   **Mock Data:** Uses `setInterval` to simulate incoming donations every 8 seconds.

## Shared Components

### `Layout.jsx`
-   Wraps the main application (Navbar + Footer).
-   **Note:** `LiveEvent` page intentionally does *not* use this layout to maximize screen real estate.

## Design System (Tailwind)
-   **Primary:** `bg-primary` (Blue-600) - Main actions, brand color.
-   **Secondary:** `text-secondary` (Amber-500) - Highlights, money amounts.
-   **Backgrounds:** `bg-gray-50` (Light mode), `bg-gray-900` (Dark/Live mode).
