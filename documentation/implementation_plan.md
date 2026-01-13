# Live Fundraising System Implementation Plan (Frontend First)

This project is a Live Fundraising System. As per the latest instructions, we will first build a fully functional **Frontend Prototype** using dummy data to ensure high-quality UI/UX before connecting a backend.

## User Review Required
> [!NOTE]
> **Frontend-First Strategy:** We will build the entire UI using mock data. The backend (Node/Express/MongoDB) will be implemented in a subsequent phase.

> [!TIP]
> **Design Inspiration:** references (PayBee, Pledge, etc.) will be used to create a "Premium," fast, and responsive interface suitable for live events.

## Proposed Changes

### 1. Project Structure & Documentation
-   **Root:** `c:/React_Projects/donation_service`
-   **[NEW] [documentation](file:///c:/React_Projects/donation_service/documentation)**
    -   Will contain `setup.md`, `architecture.md`, `component_guide.md`.
-   **[NEW] [client](file:///c:/React_Projects/donation_service/client)**
    -   Vite + React + Tailwind CSS.

### 2. Frontend Development (Phase 1)
All data will be served from a `src/mocks` directory.

#### Design System
-   **Theme:** Modern, high-contrast for readability on large screens (Live View).
-   **Libraries:** `framer-motion` (animations), `lucide-react` (icons), `recharts` (dashboard charts).

#### Core Views
1.  **Landing Page:** Hero section, upcoming events list.
2.  **Live Event View (The "Pressure" Screen):**
    -   **Thermometer/Progress Bar:** Dynamic animation based on goal.
    -   **Live Feed:** Scrolling list of recent donations.
    -   **Leaderboard:** Top donors.
    -   **Confetti:** Triggered on "new donation" (simulated).
3.  **Donation Experience:**
    -   Donor Sign-up/Guest flow.
    -   Payment Modal (Mock fields).
4.  **Organizer Dashboard:**
    -   Overview of active event stats.

### 3. Backend Integration (Phase 2 - Future)
-   Node.js, Express, MongoDB.
-   Socket.io for real real-time data.

## Verification
-   **Visual Inspection:** Ensure responsiveness (Mobile vs. Projector Screen).
-   **Mock Flows:** Click through the entire donation process without errors.
