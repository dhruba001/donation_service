import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mockEvents, mockDonations } from '../mocks/data';
import { Share2, Heart, DollarSign } from 'lucide-react';
import clsx from 'clsx';

export default function LiveEvent() {
  const { id } = useParams();
  const event = mockEvents.find(e => e.id === id) || mockEvents[0];
  const [donations, setDonations] = useState(mockDonations.filter(d => d.eventId === event.id));
  const [totalRaised, setTotalRaised] = useState(event.raised);
  const [lastDonation, setLastDonation] = useState(null);

  // Simulate Live Donations
  useEffect(() => {
    const interval = setInterval(() => {
        const randomAmount = [50, 100, 250, 500, 1000][Math.floor(Math.random() * 5)];
        const newDonation = {
            id: `new_${Date.now()}`,
            donorName: "New Donor",
            amount: randomAmount,
            message: "Keep going!",
            timestamp: new Date().toISOString(),
            eventId: event.id,
            type: "online"
        };
        
        setLastDonation(newDonation);
        setDonations(prev => [newDonation, ...prev]);
        setTotalRaised(prev => prev + randomAmount);

        // Hide confetti/highlight after 3 seconds
        setTimeout(() => setLastDonation(null), 3000);

    }, 8000); // New donation every 8 seconds

    return () => clearInterval(interval);
  }, [event.id]);

  const progress = Math.min((totalRaised / event.goal) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

      {/* Confetti / Highlight Overlay */}
      <AnimatePresence>
          {lastDonation && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
              >
                  <div className="text-center">
                      <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 drop-shadow-2xl animate-pulse">
                          ${lastDonation.amount}
                      </h1>
                      <p className="text-2xl md:text-4xl font-bold mt-4 text-white drop-shadow-lg">
                          from {lastDonation.donorName}
                      </p>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 py-8 h-screen flex flex-col">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
              <div>
                  <h1 className="text-3xl font-bold">{event.title}</h1>
                  <p className="text-gray-400">Organized by {event.organizer}</p>
              </div>
              <div className="flex gap-4">
                  <div className="text-right">
                      <p className="text-sm text-gray-400">Join & Donate at</p>
                      <p className="text-2xl font-mono text-primary font-bold">live.fund/join</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                      {/* QR Placeholder */}
                      <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                          <Share2 className="w-6 h-6 text-white"/>
                      </div>
                  </div>
              </div>
          </header>

          <div className="flex-1 grid grid-cols-12 gap-8">
              {/* Left Column: Thermometer & Main Stats */}
              <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                  <div className="text-center mb-12">
                      <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-4 border border-green-500/30">
                          LIVE
                      </span>
                      <h2 className="text-8xl font-black tracking-tighter mb-2">
                          ${totalRaised.toLocaleString()}
                      </h2>
                      <p className="text-2xl text-gray-400 font-light">
                          raised of ${event.goal.toLocaleString()} goal
                      </p>
                  </div>

                  {/* Thermometer Bar */}
                  <div className="relative w-full h-16 bg-gray-800 rounded-full overflow-hidden border border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-end px-4"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                      >
                          <div className="w-2 h-full bg-white/30 skew-x-12 translate-x-4 blur-sm absolute top-0 right-0"></div>
                      </motion.div>
                  </div>
                  
                  {/* Milestones */}
                  <div className="flex justify-between mt-4 text-gray-500 text-sm font-medium uppercase tracking-widest">
                      <span>$0</span>
                      <span>$25k</span>
                      <span>$50k</span>
                  </div>

                  {/* Call to Action - For Projector View */}
                  <div className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto w-full">
                      <p className="text-2xl font-light mb-4">Help us reach our goal!</p>
                      <div className="flex items-center justify-center gap-2 text-4xl font-bold text-secondary">
                          <DollarSign className="w-8 h-8"/>
                          <span>Text GIVE to 555-0123</span>
                      </div>
                  </div>
              </div>

              {/* Right Column: Live Feed & Leaderboard */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 h-[70vh] sticky top-8">
                  {/* Latest Donations */}
                  <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 flex-1 overflow-hidden flex flex-col">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse"/> 
                          Recent Donations
                      </h3>
                      <div className="overflow-y-auto space-y-4 no-scrollbar flex-1 pr-2">
                          <AnimatePresence initial={false}>
                            {donations.map((d) => (
                                <motion.div
                                    key={d.id}
                                    initial={{ opacity: 0, y: -20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    className="bg-gray-700/40 p-3 rounded-lg flex items-center justify-between border-l-4 border-primary"
                                >
                                    <div>
                                        <p className="font-bold text-white">{d.donorName}</p>
                                        <p className="text-xs text-gray-400">{d.message || "Donated"}</p>
                                    </div>
                                    <span className="font-mono text-green-400 font-bold">+${d.amount}</span>
                                </motion.div>
                            ))}
                          </AnimatePresence>
                      </div>
                  </div>

                  {/* Leaderboard (Top 3) */}
                  <div className="bg-gradient-to-br from-indigo-900 to-gray-900 rounded-2xl border border-indigo-500/30 p-6">
                      <h3 className="text-lg font-bold mb-4">Top Supporters</h3>
                      <ul className="space-y-3">
                          {[
                             { name: "Michael Chen", amt: 1000 },
                             { name: "Sarah Connor", amt: 750 },
                             { name: "TechCorp Inc.", amt: 500 }
                          ].map((d, i) => (
                              <li key={i} className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-0">
                                  <div className="flex items-center gap-3">
                                      <span className={clsx(
                                          "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                          i === 0 ? "bg-yellow-400 text-black" :
                                          i === 1 ? "bg-gray-300 text-black" :
                                          "bg-orange-700 text-white"
                                      )}>{i + 1}</span>
                                      <span className="font-medium text-gray-200">{d.name}</span>
                                  </div>
                                  <span className="text-secondary font-bold">${d.amt}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
