import React, { useState } from 'react';
import { Plus, Edit, Trash2, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Event, EventRegistration } from '../../services/api';
import EventForm from './EventForm';

interface EventManagerProps {
  events: Event[];
  registrations: Record<string, EventRegistration[]>;
  onAdd: (event: Omit<Event, 'id' | 'createdAt'>) => void;
  onUpdate: (id: string, event: Omit<Event, 'id' | 'createdAt'>) => void;
  onDelete: (id: string) => void;
}

function EventManager({ events, registrations, onAdd, onUpdate, onDelete }: EventManagerProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const handleSubmit = (data: Omit<Event, 'id' | 'createdAt'>) => {
    if (editingEvent) {
      onUpdate(editingEvent.id, data);
    } else {
      onAdd(data);
    }
    setShowForm(false);
    setEditingEvent(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Events</h2>
        <button
          onClick={() => {
            setEditingEvent(null);
            setShowForm(true);
          }}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Event
        </button>
      </div>

      {showForm && (
        <div className="mb-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingEvent ? 'Edit Event' : 'Add New Event'}
          </h3>
          <EventForm
            onSubmit={handleSubmit}
            initialData={editingEvent || undefined}
            onCancel={() => {
              setShowForm(false);
              setEditingEvent(null);
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
              
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
                  <span className="ml-2 text-gray-600">
                    Registrations: {registrations[event.id]?.length || 0} / {event.capacity}
                  </span>
                </div>
              </div>

              <p className="mt-2 text-gray-600">{event.description}</p>

              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => {
                    setEditingEvent(event);
                    setShowForm(true);
                  }}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this event?')) {
                      onDelete(event.id);
                    }
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventManager;