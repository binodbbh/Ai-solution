import React from 'react';
import { Trash2 } from 'lucide-react';
import { Demo } from '../../services/api';
import StatusDropdown from '../StatusDropdown';

interface DemoRequestsTableProps {
  demos: Demo[];
  onUpdateStatus: (id: string, status: 'unread' | 'read' | 'responded') => void;
  onDelete: (id: string) => void;
}

function DemoRequestsTable({ demos, onUpdateStatus, onDelete }: DemoRequestsTableProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {demos.map((demo) => (
            <tr key={demo.id}>
              <td className="px-6 py-4 whitespace-nowrap">{demo.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{demo.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{demo.company}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusDropdown
                  status={demo.status}
                  onChange={(status) => onUpdateStatus(demo.id, status)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(demo.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onDelete(demo.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoRequestsTable;