
import React, { useState } from 'react';
import { MEDICAL_TESTS } from '../constants';
import { CheckCircle2, Calendar as CalendarIcon, Clock, User, Phone } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    testId: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  const selectedTest = MEDICAL_TESTS.find(t => t.id === formData.testId);

  if (step === 3) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl shadow-blue-50 text-center max-w-2xl mx-auto my-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Received!</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Your appointment for <span className="font-semibold text-gray-900">{selectedTest?.name}</span> is scheduled for <span className="font-semibold text-gray-900">{formData.date} at {formData.time}</span>.
          <br /><br />
          We will send a confirmation and pre-test instructions to your phone via WhatsApp shortly.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-50 max-w-4xl mx-auto my-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Book Your Test</h2>
          <p className="text-gray-500 mt-2">Accurate diagnostics at your fingertips.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>1</span>
          <div className="w-8 h-px bg-gray-200" />
          <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>2</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 ? (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Select Laboratory Test</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MEDICAL_TESTS.map((test) => (
                  <label
                    key={test.id}
                    className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                      formData.testId === test.id ? 'border-blue-600 bg-blue-50' : 'border-gray-100 hover:border-blue-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name="test"
                      className="sr-only"
                      checked={formData.testId === test.id}
                      onChange={() => setFormData({ ...formData, testId: test.id })}
                      required
                    />
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-gray-900">{test.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{test.category}</div>
                      </div>
                      <div className="font-bold text-blue-600">GHS {test.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                  <CalendarIcon size={16} className="mr-2 text-blue-600" /> Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                  <Clock size={16} className="mr-2 text-blue-600" /> Preferred Time
                </label>
                <select
                  className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                >
                  <option value="">Select Time Slot</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={!formData.testId || !formData.date || !formData.time}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-100"
            >
              Continue to Patient Details
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
             <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm font-bold">
                   {selectedTest?.name.substring(0, 2)}
                </div>
                <div>
                   <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Selected Test</p>
                   <p className="font-bold text-gray-900">{selectedTest?.name}</p>
                </div>
             </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <User size={16} className="mr-2 text-blue-600" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <Phone size={16} className="mr-2 text-blue-600" /> Phone Number (WhatsApp preferred)
                  </label>
                  <input
                    type="tel"
                    placeholder="+233..."
                    className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handlePrev}
                className="w-1/3 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
