export const mockEvents = [
  {
    id: "evt_1",
    title: "Save the Oceans Gala 2026",
    description: "Join us for an evening of inspiration as we raise funds to protect our marine ecosystems.",
    date: "2026-03-27T18:00:00",
    status: "active",
    goal: 50000,
    raised: 12500,
    organizer: "Oceanic Preservation Society",
    location: "Grand Marina Hall, Seattle"
  },
  {
    id: "evt_2",
    title: "Tech for Kids Charity Run",
    description: "Empowering the next generation through technology education.",
    date: "2026-04-10T09:00:00",
    status: "upcoming",
    goal: 25000,
    raised: 0,
    organizer: "Future Coders Foundation",
    location: "Central Park, NY"
  }
];

export const mockDonations = [
  { id: "don_1", donorName: "Alice Jenkins", amount: 500, message: "Keep up the great work!", timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), eventId: "evt_1", type: "online" },
  { id: "don_2", donorName: "Michael Chen", amount: 1000, message: "For the dolphins! 🐬", timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), eventId: "evt_1", type: "online" },
  { id: "don_3", donorName: "Anonymous", amount: 250, message: "", timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), eventId: "evt_1", type: "pledge" },
];
