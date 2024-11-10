import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <ul>
        <li><Link to="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</Link></li>
        <li><Link to="/assessment" className="block p-2 hover:bg-gray-700">Assessment</Link></li>
        <li><Link to="/packages" className="block p-2 hover:bg-gray-700">Packages</Link></li>
        <li><Link to="/download-summary" className="block p-2 hover:bg-gray-700">Download Summary</Link></li>
        <li><Link to="/report" className="block p-2 hover:bg-gray-700">Report</Link></li>
        <li><Link to="/book-session" className="block p-2 hover:bg-gray-700">Book Session</Link></li>
        <li><Link to="/session-management" className="block p-2 hover:bg-gray-700">Session Management</Link></li>
        <li><Link to="/activity-settings" className="block p-2 hover:bg-gray-700">Activity Settings</Link></li>
        <li><Link to="/settings" className="block p-2 hover:bg-gray-700">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
