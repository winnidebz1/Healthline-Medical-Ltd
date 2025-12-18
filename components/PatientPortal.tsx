
import React, { useState } from 'react';
import { ShieldCheck, Lock, FileDown, History, ChevronRight, Info } from 'lucide-react';

const PatientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testId, setTestId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    if (testId && pin) setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Kwesi Arthur</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-sm font-semibold text-gray-500 hover:text-red-600">Logout</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Available</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Result</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">LB</div>
                  <div>
                    <p className="font-bold text-gray-900">Lipid Profile Screening</p>
                    <p className="text-xs text-gray-500">Collected: Oct 24, 2023</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
                  <FileDown size={18} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Test History</h3>
                <History className="text-gray-300" size={20} />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Full Blood Count', date: 'Sep 12, 2023', status: 'completed' },
                  { name: 'Urinalysis', date: 'Jul 05, 2023', status: 'completed' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold">{item.name[0]}</div>
                       <div>
                          <p className="font-semibold text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                       </div>
                    </div>
                    <ChevronRight size={20} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <Info size={160} />
              </div>
              <h4 className="text-xl font-bold mb-4">Medical Note</h4>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Laboratory results are intended for review by a healthcare professional. Do not attempt to self-diagnose or self-medicate based on these reports.
              </p>
              <button className="text-sm font-bold border-b-2 border-blue-400 pb-1 hover:border-white transition-colors">
                Talk to a Consultant
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Need Help?</h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">Call our diagnostic helpline:</p>
                <p className="font-bold text-blue-600 text-lg">+233 24 123 4567</p>
                <div className="pt-4 border-t border-gray-50">
                   <p className="text-xs text-gray-400 italic">Open Mon-Sat: 7am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-20 px-4 animate-fadeIn">
      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-50 border border-gray-100">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <ShieldCheck size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Secure Access</h2>
        <p className="text-gray-500 text-center mb-8">Enter your credentials to view results</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Test ID / Phone</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-4 pl-12 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none font-medium"
                placeholder="HLM-XXXX-XXXX"
                value={testId}
                onChange={(e) => setTestId(e.target.value)}
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Security PIN / OTP</label>
            <input
              type="password"
              className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none font-medium tracking-widest"
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all mt-4"
          >
            Access My Results
          </button>
        </form>
        <p className="text-center mt-8 text-sm text-gray-400 leading-relaxed px-4">
          Forgot your ID? Check your registration receipt or contact the front desk.
        </p>
      </div>
    </div>
  );
};

export default PatientPortal;
