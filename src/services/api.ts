import axios from 'axios';

// Simulated backend storage using localStorage
const STORAGE_KEYS = {
  DEMOS: 'ai_solutions_demos',
  CONTACTS: 'ai_solutions_contacts',
  GALLERY: 'ai_solutions_gallery',
  EVENTS: 'ai_solutions_events',
  EVENT_REGISTRATIONS: 'ai_solutions_event_registrations',
};

// Initialize storage if empty
Object.values(STORAGE_KEYS).forEach(key => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  }
});

export type Status = 'unread' | 'read' | 'responded';

export interface Demo {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  interest: string;
  status: Status;
  createdAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  jobTitle: string;
  message: string;
  status: Status;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  imageUrl: string;
  createdAt: string;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

// Generic CRUD operations
const createItem = <T extends { id: string }>(key: string, item: T): T => {
  const items = JSON.parse(localStorage.getItem(key) || '[]');
  items.push(item);
  localStorage.setItem(key, JSON.stringify(items));
  return item;
};

const getItems = <T>(key: string): T[] => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

const updateItem = <T extends { id: string }>(key: string, id: string, item: T): T => {
  const items = JSON.parse(localStorage.getItem(key) || '[]');
  const index = items.findIndex((i: T) => i.id === id);
  if (index !== -1) {
    items[index] = item;
    localStorage.setItem(key, JSON.stringify(items));
  }
  return item;
};

const deleteItem = (key: string, id: string): void => {
  const items = JSON.parse(localStorage.getItem(key) || '[]');
  const filtered = items.filter((item: any) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(filtered));
};

// API functions
export const api = {
  // Demo requests
  createDemo: (demo: Omit<Demo, 'id' | 'createdAt' | 'status'>) =>
    createItem<Demo>(STORAGE_KEYS.DEMOS, {
      ...demo,
      id: crypto.randomUUID(),
      status: 'unread',
      createdAt: new Date().toISOString(),
    }),
  getDemos: () => getItems<Demo>(STORAGE_KEYS.DEMOS),
  updateDemoStatus: (id: string, status: Status) => {
    const demos = getItems<Demo>(STORAGE_KEYS.DEMOS);
    const demo = demos.find(d => d.id === id);
    if (demo) {
      updateItem(STORAGE_KEYS.DEMOS, id, { ...demo, status });
    }
  },
  deleteDemo: (id: string) => deleteItem(STORAGE_KEYS.DEMOS, id),

  // Contact requests
  createContact: (contact: Omit<Contact, 'id' | 'createdAt' | 'status'>) =>
    createItem<Contact>(STORAGE_KEYS.CONTACTS, {
      ...contact,
      id: crypto.randomUUID(),
      status: 'unread',
      createdAt: new Date().toISOString(),
    }),
  getContacts: () => getItems<Contact>(STORAGE_KEYS.CONTACTS),
  updateContactStatus: (id: string, status: Status) => {
    const contacts = getItems<Contact>(STORAGE_KEYS.CONTACTS);
    const contact = contacts.find(c => c.id === id);
    if (contact) {
      updateItem(STORAGE_KEYS.CONTACTS, id, { ...contact, status });
    }
  },
  deleteContact: (id: string) => deleteItem(STORAGE_KEYS.CONTACTS, id),

  // Gallery items
  createGalleryItem: (item: Omit<GalleryItem, 'id' | 'createdAt'>) =>
    createItem<GalleryItem>(STORAGE_KEYS.GALLERY, {
      ...item,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }),
  getGalleryItems: () => getItems<GalleryItem>(STORAGE_KEYS.GALLERY),
  updateGalleryItem: (id: string, item: Omit<GalleryItem, 'id' | 'createdAt'>) => {
    const galleryItem = getItems<GalleryItem>(STORAGE_KEYS.GALLERY).find(g => g.id === id);
    if (galleryItem) {
      updateItem(STORAGE_KEYS.GALLERY, id, { ...galleryItem, ...item });
    }
  },
  deleteGalleryItem: (id: string) => deleteItem(STORAGE_KEYS.GALLERY, id),

  // Events
  createEvent: (event: Omit<Event, 'id' | 'createdAt'>) =>
    createItem<Event>(STORAGE_KEYS.EVENTS, {
      ...event,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }),
  getEvents: () => getItems<Event>(STORAGE_KEYS.EVENTS),
  updateEvent: (id: string, event: Omit<Event, 'id' | 'createdAt'>) => {
    const existingEvent = getItems<Event>(STORAGE_KEYS.EVENTS).find(e => e.id === id);
    if (existingEvent) {
      updateItem(STORAGE_KEYS.EVENTS, id, { ...existingEvent, ...event });
    }
  },
  deleteEvent: (id: string) => deleteItem(STORAGE_KEYS.EVENTS, id),

  // Event Registrations
  createEventRegistration: (registration: Omit<EventRegistration, 'id' | 'createdAt'>) =>
    createItem<EventRegistration>(STORAGE_KEYS.EVENT_REGISTRATIONS, {
      ...registration,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }),
  getEventRegistrations: (eventId: string) => 
    getItems<EventRegistration>(STORAGE_KEYS.EVENT_REGISTRATIONS).filter(r => r.eventId === eventId),
  deleteEventRegistration: (id: string) => deleteItem(STORAGE_KEYS.EVENT_REGISTRATIONS, id),

  // Image upload simulation
  uploadImage: async (file: File): Promise<string> => {
    // Simulate image upload delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, we would upload to a server and get back a URL
    // For demo, we'll use a random Unsplash image
    return `https://source.unsplash.com/random/800x600?sig=${Math.random()}`;
  },
};