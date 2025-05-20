import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center sticky top-0 z-20">
      <button className="md:hidden" onClick={onMenuClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <h1 className="hidden md:block text-xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-4 items-center">
        <BellIcon className="h-5 w-5" />
        <UserCircleIcon className="h-6 w-6" />
      </div>
    </header>
  );
};

export default Navbar;
