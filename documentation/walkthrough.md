# Walkthrough: Live Fundraising System (Frontend Prototype)

We have successfully built the **Frontend Prototype** for the Live Fundraising System. It uses **mock data** to simulate the live event experience without needing a backend server yet.

## What's Implemented

1.  **Landing Page:**
    -   Professional hero section.
    -   List of "Active Events" with real-time progress bars.
    -   Responsive navigation.

2.  **Live Event "Pressure" Screen:**
    -   **Thermometer:** Animates as donations come in.
    -   **Live Feed:** Shows new donations in real-time.
    -   **Simulation:** New donations are automatically generated every 8 seconds to demonstrate the stress-test capability.
    -   **Confetti:** Celebratory animation for new donations.

3.  **Architecture:**
    -   **Tech:** React + Vite + Tailwind CSS v4.
    -   **State:** Local state simulated with timers.
    -   **Routing:** `react-router-dom` handles navigation.

## Verified Screenshot
![Live Event Dashboard](file:///C:/Users/gdhru/.gemini/antigravity/brain/b7d5064b-13f0-4d09-a559-ae7c60262ff2/live_event_page_1768305279240.png)

## How to Run
1.  Open terminal in `c:/React_Projects/donation_service/client`.
2.  Run `npm run dev`.
3.  Open browser to the Local URL (e.g., `http://localhost:5175`).

## Next Steps (Phase 2)
-   Implement the Backend (Node/Express).
-   Replace mock data with `socket.io` specific events.
-   Add actual "Donate" payment flow.
