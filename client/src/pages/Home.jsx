import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockEvents } from '../mocks/data';

export default function Home() {
  const activeEvents = mockEvents.filter(e => e.status === 'active');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl">
                        <span className="block xl:inline">Fundraising made</span>{' '}
                        <span className="block text-primary xl:inline">live & interactive</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl lg:mx-0">
                        Engage your audience with real-time donation displays, thermometers, and leaderboards. Perfect for galas, livestreams, and charity runs.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link to="/events" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Explore Events
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link to="/demo" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                                View Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
                 <div className="mt-12 lg:mt-0 relative">
                     {/* Abstract Decorative Shapes */}
                     <div className="absolute top-0 -right-4 -translate-y-12 translate-x-12 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
                     <div className="relative mx-auto w-full rounded-lg shadow-xl lg:max-w-md bg-white p-4 rotate-2 transform transition-transform hover:rotate-0 duration-500">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Live Dashboard Preview</span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <Zap className="h-5 w-5" />
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                  <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Everything you need for a successful event
                  </p>
              </div>

              <div className="mt-20">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                      <div className="relative">
                          <dt>
                              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                  <Globe className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Hybrid Events</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">
                              Seamlessly handle in-person and online donations simultaneously.
                          </dd>
                      </div>

                      <div className="relative">
                          <dt>
                              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                  <Zap className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real-time Updates</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">
                              Watch the thermometer rise instantly as donations pour in.
                          </dd>
                      </div>

                      <div className="relative">
                          <dt>
                              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                  <Shield className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Payments</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">
                              Bank-grade security for all transactions and donor data.
                          </dd>
                      </div>
                  </dl>
              </div>
          </div>
      </div>

       {/* Active Events Section */}
       {activeEvents.length > 0 && (
           <div className="bg-gray-50 py-16">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Happening Now</h2>
                   <div className="grid gap-6 lg:grid-cols-3">
                       {activeEvents.map(evt => (
                           <div key={evt.id} className="bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
                               <div className="h-48 bg-gray-200 relative">
                                   {/* Placeholder for Event Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <span className="text-4xl font-light">Event Img</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-fast">
                                        LIVE
                                    </div>
                               </div>
                               <div className="p-6">
                                   <p className="text-sm font-medium text-primary mb-1">{evt.organizer}</p>
                                   <h3 className="text-xl font-bold text-gray-900 mb-2">{evt.title}</h3>
                                   <p className="text-gray-500 text-sm mb-4 line-clamp-2">{evt.description}</p>
                                   
                                   <div className="mb-6">
                                       <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                                           <span>${evt.raised.toLocaleString()} raised</span>
                                           <span>{Math.round((evt.raised / evt.goal) * 100)}%</span>
                                       </div>
                                       <div className="w-full bg-gray-200 rounded-full h-2">
                                           <div className="bg-secondary h-2 rounded-full" style={{ width: `${(evt.raised / evt.goal) * 100}%` }}></div>
                                       </div>
                                   </div>

                                   <Link to={`/event/${evt.id}/live`} className="block w-full text-center bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                       Watch Live <ArrowRight className="h-4 w-4"/>
                                   </Link>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       )}
    </div>
  );
}
