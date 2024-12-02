import React from 'react';
import { Status } from '../services/api';

interface StatusDropdownProps {
  status: Status;
  onChange: (status: Status) => void;
}

function StatusDropdown({ status, onChange }: StatusDropdownProps) {
  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value as Status)}
      className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="unread">Unread</option>
      <option value="read">Read</option>
      <option value="responded">Responded</option>
    </select>
  );
}

export default StatusDropdown;