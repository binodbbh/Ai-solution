import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  imageUrl: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "AI Innovation Summit 2024",
    date: "2024-04-15",
    time: "09:00 AM - 05:00 PM",
    location: "Tech Hub, Sunderland",
    description: "Join us for a day of AI innovation, featuring keynote speakers and hands-on workshops.",
    capacity: 200,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Virtual Assistant Workshop",
    date: "2024-05-20",
    time: "02:00 PM - 04:00 PM",
    location: "Online Event",
    description: "Learn how to implement AI-powered virtual assistants in your business.",
    capacity: 100,
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80"
  }
];

function Events() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join us at our upcoming events and workshops
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden lg:flex"
            >
              <div className="lg:w-1/3">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-48 w-full object-cover lg:h-full"
                />
              </div>
              <div className="p-6 lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-600">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-600">Capacity: {event.capacity}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{event.description}</p>

                <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;