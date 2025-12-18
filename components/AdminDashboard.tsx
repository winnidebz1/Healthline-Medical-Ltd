
import React, { useState } from 'react';
Users, Calendar, FileCheck, AlertCircle, BarChart3,
  Search, Filter, Plus, Download, LayoutGrid, List, MoreVertical,
  CheckCircle2, Clock, XCircle, Menu, X
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Mon', tests: 45 },
  { name: 'Tue', tests: 52 },
  { name: 'Wed', tests: 38 },
  { name: 'Thu', tests: 65 },
  { name: 'Fri', tests: 48 },
  { name: 'Sat', tests: 32 },
  { name: 'Sun', tests: 10 },
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Today's Bookings", value: "24", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Pending Tests", value: "12", icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Results to Upload", value: "8", icon: AlertCircle, color: "text-red-600", bg: "bg-red-50" },
    { label: "Completed Today", value: "18", icon: FileCheck, color: "text-green-600", bg: "bg-green-50" },
  ];

  const renderOverview = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-gray-900">Weekly Test Volume</h3>
            <div className="flex items-center space-x-2 text-xs font-semibold text-gray-400">
              <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-1" /> Volume</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="tests" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Bookings</h3>
          <div className="space-y-4">
            {[
              { name: 'Abigail Ansah', test: 'Lipid Profile', time: '08:30 AM', status: 'pending' },
              { name: 'John Mensah', test: 'PSA Screening', time: '09:15 AM', status: 'confirmed' },
              { name: 'Doris Appiah', test: 'LFT Profile', time: '10:00 AM', status: 'pending' },
              { name: 'Kofi Amoah', test: 'Blood Count', time: '11:00 AM', status: 'completed' },
            ].map((booking, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xs">
                    {booking.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{booking.name}</p>
                    <p className="text-xs text-gray-500">{booking.test}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">{booking.time}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${booking.status === 'completed' ? 'text-green-500' :
                    booking.status === 'confirmed' ? 'text-blue-500' : 'text-orange-500'
                    }`}>{booking.status}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-all">View All Activity</button>
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-fadeIn">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-900">Patient Appointments</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search patients..." className="pl-9 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64" />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl"><Filter size={20} /></button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm">
            <Plus size={18} />
            <span className="hidden sm:inline">Add Manual</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Patient</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Test Type</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Date / Time</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { id: '1', patient: 'Kwesi Arthur', test: 'Lipid Profile', date: 'Oct 25, 2023', time: '08:00 AM', phone: '0241234567', status: 'pending' },
              { id: '2', patient: 'Sarah Koomson', test: 'Antenatal Screen', date: 'Oct 25, 2023', time: '09:30 AM', phone: '0559876543', status: 'confirmed' },
              { id: '3', patient: 'James Lamptey', test: 'PSA Test', date: 'Oct 26, 2023', time: '10:00 AM', phone: '0240001112', status: 'cancelled' },
              { id: '4', patient: 'Afia Poku', test: 'Full Blood Count', date: 'Oct 26, 2023', time: '11:00 AM', phone: '0207778889', status: 'completed' },
            ].map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">{row.patient.substring(0, 2).toUpperCase()}</div>
                    <span className="text-sm font-bold text-gray-900">{row.patient}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{row.test}</td>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-gray-900">{row.date}</div>
                  <div className="text-xs text-gray-400">{row.time}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.phone}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${row.status === 'completed' ? 'bg-green-100 text-green-700' :
                    row.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                      row.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-900"><MoreVertical size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">Showing 4 of 24 appointments</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-400">Previous</button>
          <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-blue-600">Next</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <div className="w-full md:w-64 bg-white border-r border-gray-100 md:h-screen fixed md:sticky top-0 z-50">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Users size={20} />
            </div>
            <span className="font-bold text-gray-900 tracking-tight">Staff Panel</span>
          </div>
          <button
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`
          ${isMobileMenuOpen ? 'flex' : 'hidden'} 
          md:flex flex-col 
          absolute md:static top-20 left-0 right-0 
          bg-white md:bg-transparent 
          shadow-xl md:shadow-none 
          border-b md:border-b-0 border-gray-100 
          h-[calc(100vh-5rem)] md:h-[calc(100vh-88px)]
          overflow-y-auto
        `}>
          <div className="flex-grow p-4 space-y-2">
            {[
              { id: 'overview', icon: BarChart3, label: 'Dashboard' },
              { id: 'appointments', icon: Calendar, label: 'Appointments' },
              { id: 'results', icon: FileCheck, label: 'Lab Results' },
              { id: 'campaigns', icon: LayoutGrid, label: 'Campaigns' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 bg-white md:bg-transparent">
            <div className="p-4 bg-gray-50 rounded-2xl">
              <p className="text-xs font-bold text-gray-900">Dr. Yaw Adjei</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Administrator</p>
            </div>
            <button className="w-full mt-4 text-xs font-bold text-red-500 hover:text-red-700 transition-colors">Sign Out</button>
          </div>
        </div>
      </div>

      <div className="flex-grow p-4 md:p-8 lg:p-12 overflow-y-auto mt-20 md:mt-0">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h2>
            <p className="text-sm text-gray-500 mt-1">Healthline Medical Ltd Operational Control</p>
          </div>
          <button className="flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
        </header>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'appointments' && renderAppointments()}
        {activeTab !== 'overview' && activeTab !== 'appointments' && (
          <div className="bg-white p-20 rounded-3xl border border-dashed border-gray-200 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
              <LayoutGrid size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{activeTab.toUpperCase()} Module</h3>
            <p className="text-gray-500 text-sm">This internal module is currently being optimized for high-volume lab operations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
