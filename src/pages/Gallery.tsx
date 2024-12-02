import React from 'react';
import { Image as ImageIcon, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "AI Development Workshop",
    description: "Our team conducting an AI development workshop for enterprise clients.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    category: "Workshops"
  },
  {
    id: 2,
    title: "Innovation Lab",
    description: "The AI-Solutions innovation lab where we develop cutting-edge solutions.",
    imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80",
    category: "Facilities"
  },
  {
    id: 3,
    title: "Team Collaboration",
    description: "Our diverse team working together on innovative solutions.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    category: "Team"
  }
];

function Gallery() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore our latest events, workshops, and innovations in AI technology
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 p-2">
                  <a
                    href={item.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <ImageIcon className="h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-sm text-gray-500">{item.category}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;