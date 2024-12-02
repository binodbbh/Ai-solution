import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { GalleryItem } from '../../services/api';
import GalleryForm from '../GalleryForm';

interface GalleryManagerProps {
  items: GalleryItem[];
  onAdd: (item: Omit<GalleryItem, 'id' | 'createdAt'>) => void;
  onUpdate: (id: string, item: Omit<GalleryItem, 'id' | 'createdAt'>) => void;
  onDelete: (id: string) => void;
}

function GalleryManager({ items, onAdd, onUpdate, onDelete }: GalleryManagerProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  const handleSubmit = (data: Omit<GalleryItem, 'id' | 'createdAt'>) => {
    if (editingItem) {
      onUpdate(editingItem.id, data);
    } else {
      onAdd(data);
    }
    setShowForm(false);
    setEditingItem(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Gallery Items</h2>
        <button
          onClick={() => {
            setEditingItem(null);
            setShowForm(true);
          }}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Item
        </button>
      </div>

      {showForm && (
        <div className="mb-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingItem ? 'Edit Gallery Item' : 'Add New Gallery Item'}
          </h3>
          <GalleryForm
            onSubmit={handleSubmit}
            initialData={editingItem || undefined}
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.category}</p>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => {
                    setEditingItem(item);
                    setShowForm(true);
                  }}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
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

export default GalleryManager;