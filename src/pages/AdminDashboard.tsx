import React, { useState, useEffect } from 'react';
import { BarChart, Users, Calendar, Settings, LogOut } from 'lucide-react';
import { api } from '../services/api';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import DemoRequestsTable from '../components/admin/DemoRequestsTable';
import ContactInquiriesTable from '../components/admin/ContactInquiriesTable';
import GalleryManager from '../components/admin/GalleryManager';
import EventManager from '../components/admin/EventManager';
import Logo from '../components/Logo';

function AdminDashboard() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const [activeTab, setActiveTab] = useState('analytics');
  const [demos, setDemos] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [events, setEvents] = useState([]);
  const [eventRegistrations, setEventRegistrations] = useState({});
  const [websiteVisits, setWebsiteVisits] = useState(12547); // Simulated website visits

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const demoData = api.getDemos();
    const contactData = api.getContacts();
    const galleryData = api.getGalleryItems();
    const eventData = api.getEvents();
    
    // Load registrations for each event
    const registrations = {};
    eventData.forEach(event => {
      registrations[event.id] = api.getEventRegistrations(event.id);
    });

    setDemos(demoData);
    setContacts(contactData);
    setGallery(galleryData);
    setEvents(eventData);
    setEventRegistrations(registrations);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  // Demo Requests handlers
  const handleUpdateDemoStatus = (id, status) => {
    api.updateDemoStatus(id, status);
    loadData();
  };

  const handleDeleteDemo = (id) => {
    if (window.confirm('Are you sure you want to delete this demo request?')) {
      api.deleteDemo(id);
      loadData();
    }
  };

  // Contact Inquiries handlers
  const handleUpdateContactStatus = (id, status) => {
    api.updateContactStatus(id, status);
    loadData();
  };

  const handleDeleteContact = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      api.deleteContact(id);
      loadData();
    }
  };

  // Gallery handlers
  const handleAddGalleryItem = (item) => {
    api.createGalleryItem(item);
    loadData();
  };

  const handleUpdateGalleryItem = (id, item) => {
    api.updateGalleryItem(id, item);
    loadData();
  };

  const handleDeleteGalleryItem = (id) => {
    if (window.confirm('Are you sure you want to delete this gallery item?')) {
      api.deleteGalleryItem(id);
      loadData();
    }
  };

  // Event handlers
  const handleAddEvent = (event) => {
    api.createEvent(event);
    loadData();
  };

  const handleUpdateEvent = (id, event) => {
    api.updateEvent(id, event);
    loadData();
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      api.deleteEvent(id);
      loadData();
    }
  };

  const stats = [
    { name: 'Website Visits', value: websiteVisits.toLocaleString(), icon: BarChart },
    { name: 'Demo Requests', value: demos.length, icon: Users },
    { name: 'Contact Inquiries', value: contacts.length, icon: Calendar },
    { name: 'Events', value: events.length, icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-indigo-700 min-h-screen p-4">
          <div className="mb-8">
            <Logo />
          </div>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center px-4 py-2 text-white w-full rounded-md ${
                activeTab === 'analytics' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
              }`}
            >
              <BarChart className="h-5 w-5 mr-3" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('demos')}
              className={`flex items-center px-4 py-2 text-white w-full rounded-md ${
                activeTab === 'demos' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Demo Requests
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex items-center px-4 py-2 text-white w-full rounded-md ${
                activeTab === 'contacts' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Contact Inquiries
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center px-4 py-2 text-white w-full rounded-md ${
                activeTab === 'gallery' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
              }`}
            >
              <Calendar className="h-5 w-5 mr-3" />
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center px-4 py-2 text-white w-full rounded-md ${
                activeTab === 'events' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
              }`}
            >
              <Calendar className="h-5 w-5 mr-3" />
              Events
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center px-4 py-2 text-white w-full rounded-md ${
                activeTab === 'settings' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
              }`}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-white w-full rounded-md hover:bg-indigo-600"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5">
                        <p className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </p>
                        <p className="mt-1 text-3xl font-semibold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content based on active tab */}
          <div className="mt-8">
            {activeTab === 'demos' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Demo Requests</h2>
                <DemoRequestsTable
                  demos={demos}
                  onUpdateStatus={handleUpdateDemoStatus}
                  onDelete={handleDeleteDemo}
                />
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Inquiries</h2>
                <ContactInquiriesTable
                  contacts={contacts}
                  onUpdateStatus={handleUpdateContactStatus}
                  onDelete={handleDeleteContact}
                />
              </div>
            )}

            {activeTab === 'gallery' && (
              <GalleryManager
                items={gallery}
                onAdd={handleAddGalleryItem}
                onUpdate={handleUpdateGalleryItem}
                onDelete={handleDeleteGalleryItem}
              />
            )}

            {activeTab === 'events' && (
              <EventManager
                events={events}
                registrations={eventRegistrations}
                onAdd={handleAddEvent}
                onUpdate={handleUpdateEvent}
                onDelete={handleDeleteEvent}
              />
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Settings</h2>
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Account Settings</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Manage your account settings and preferences
                      </p>
                    </div>
                    <div className="space-y-4">
                      <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        <Settings className="h-5 w-5 mr-2" />
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;