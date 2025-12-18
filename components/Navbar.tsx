
import React, { useState } from 'react';
import { Menu, X, HeartPulse, UserCircle, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'booking', label: 'Book a Test' },
    { id: 'results', label: 'Patient Results' },
    { id: 'hub', label: 'Medical Hub' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">HEALTHLINE</span>
              <span className="text-xs text-blue-600 font-semibold tracking-widest uppercase">Medical Ltd</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${currentPage === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('admin')}
              className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
              <LayoutDashboard size={18} />
              <span>Staff Only</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 inset-x-0 md:hidden bg-white border-b border-gray-100 shadow-xl py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('admin');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-50 rounded-md"
          >
            Staff Dashboard
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
