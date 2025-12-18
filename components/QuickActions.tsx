
import React from 'react';
import { Calendar, FileText, Search, PhoneCall } from 'lucide-react';

interface QuickActionsProps {
  onNavigate: (page: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onNavigate }) => {
  const actions = [
    { id: 'booking', icon: Calendar, label: 'Book Test', color: 'bg-blue-50 text-blue-600' },
    { id: 'results', icon: FileText, label: 'View Results', color: 'bg-green-50 text-green-600' },
    { id: 'hub', icon: Search, label: 'Find a Test', color: 'bg-orange-50 text-orange-600' },
    { id: 'contact', icon: PhoneCall, label: 'Contact Us', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={() => onNavigate(action.id)}
              className="flex items-center p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all group"
            >
              <div className={`p-3 rounded-xl ${action.color} group-hover:scale-110 transition-transform`}>
                <action.icon size={24} />
              </div>
              <span className="ml-4 font-semibold text-gray-800">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
