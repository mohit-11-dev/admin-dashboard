import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity z-30 md:hidden 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full text-background w-64 bg-background-reverse dark:bg-gray:100 h-screen shadow-lg z-40 transform transition-transform md:translate-x-0 md:static md:shadow-none 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button className="md:hidden" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <a href="/" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </a>
          <a href="/" className="block p-2 rounded hover:bg-gray-700">
            Users
          </a>
          <a href="/" className="block p-2 rounded hover:bg-gray-700">
            Reports
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
