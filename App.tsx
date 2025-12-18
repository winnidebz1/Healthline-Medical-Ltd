
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import BookingForm from './components/BookingForm';
import PatientPortal from './components/PatientPortal';
import TestHub from './components/TestHub';
import AdminDashboard from './components/AdminDashboard';
import {
  ShieldCheck, Clock, Award, Building,
  MapPin, Phone, Mail, Instagram, Facebook, Twitter,
  Heart, AlertCircle
} from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <div className="animate-fadeIn">
      <Hero onBookClick={() => setCurrentPage('booking')} />
      <QuickActions onNavigate={setCurrentPage} />

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Why Healthline Medical?</h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-500">Committed to accurate and timely diagnostics in Odorkor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: ShieldCheck, title: 'Accurate Results', desc: 'ISO standard laboratory protocols ensuring precision.' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Get most results within 4 to 24 hours of sample collection.' },
              { icon: Award, title: 'Experienced Staff', desc: 'Staffed by certified biomedical scientists and medical specialists.' },
              { icon: Building, title: 'Modern Equipment', desc: 'Utilizing the latest diagnostic technology for every test.' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-50 hover:border-blue-100 transition-all hover:shadow-lg hover:shadow-blue-50 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <item.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">Visit Our Diagnostic Center</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 text-left">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 md:p-3 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl flex-shrink-0">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Location</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Addy Junction, Off Odorkor–Kwashieman Road, Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 md:p-3 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl flex-shrink-0">
                    <Clock size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Working Hours</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Mon - Fri: 7:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-xs md:text-sm">Sat: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 md:p-3 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl flex-shrink-0">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Contact Us</h4>
                    <p className="text-gray-600 text-xs md:text-sm">+233 24 123 4567</p>
                    <p className="text-gray-600 text-xs md:text-sm">+233 50 765 4321</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 md:mt-10 py-3 md:py-4 bg-green-600 text-white text-sm md:text-base font-bold rounded-xl md:rounded-2xl hover:bg-green-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-green-100 active:scale-95">
                <Phone size={18} className="md:w-5 md:h-5" />
                <span>WhatsApp Click-to-Chat</span>
              </button>
            </div>
            <div className="h-[300px] md:h-[400px] bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm relative">
              <img src="/images/map_location.jpg" alt="Location Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return renderHome();
      case 'booking': return <BookingForm />;
      case 'results': return <PatientPortal />;
      case 'hub': return <TestHub onBookClick={() => setCurrentPage('booking')} />;
      case 'admin': return <AdminDashboard />;
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'admin' && <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />}

      <main className="flex-grow">
        {renderContent()}
      </main>

      {currentPage !== 'admin' && (
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Heart size={20} />
                  </div>
                  <span className="text-xl font-bold tracking-tight">HEALTHLINE</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The preferred choice for medical laboratory diagnosis and professional consultancy in Greater Accra. Trusted by hospitals and patients alike.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  {['About Us', 'Book a Test', 'Test Directory', 'Health Screenings', 'Consultancy'].map(link => (
                    <li key={link}><a href="#" className="hover:text-blue-400 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  {['Patient FAQ', 'Privacy Policy', 'Data Security', 'Contact Support', 'Emergency Info'].map(link => (
                    <li key={link}><a href="#" className="hover:text-blue-400 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-blue-950 rounded-3xl border border-blue-900">
                <h4 className="font-bold text-white mb-2 flex items-center">
                  {/* Fixed error on line 166: Added AlertCircle to imports from lucide-react */}
                  <AlertCircle className="text-blue-400 mr-2" size={18} /> Medical Disclaimer
                </h4>
                <p className="text-xs text-blue-200/70 leading-relaxed italic">
                  Healthline Medical Ltd provides diagnostic services only. Always consult a physician for clinical interpretation of results. For medical emergencies, call 112 immediately.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
              <p>&copy; {new Date().getFullYear()} Healthline Medical Ltd – Diagnostic Centre. All rights reserved.</p>
              <p className="mt-2">Developed with focus on Patient Privacy and Ghanaian Healthcare Standards.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
