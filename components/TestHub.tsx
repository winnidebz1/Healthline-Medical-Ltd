
import React, { useState } from 'react';
import { MEDICAL_TESTS } from '../constants';
import { Search, ChevronRight, Info, MessageSquareText, Sparkles, Loader2 } from 'lucide-react';
import { askMedicalAssistant } from '../services/geminiService';

interface TestHubProps {
  onBookClick: () => void;
}

const TestHub: React.FC<TestHubProps> = ({ onBookClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const categories = ['All', ...Array.from(new Set(MEDICAL_TESTS.map(t => t.category)))];

  const filteredTests = MEDICAL_TESTS.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAskAi = async () => {
    if (!aiQuestion.trim()) return;
    setIsLoadingAi(true);
    setAiResponse(null);
    const result = await askMedicalAssistant(aiQuestion);
    setAiResponse(result || null);
    setIsLoadingAi(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Info Hub</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Learn about the tests we offer, how to prepare, and what your results mean.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for a test (e.g., 'Lipid', 'Full Blood')..."
                className="w-full p-4 pl-12 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="p-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTests.map((test) => (
              <div key={test.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{test.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{test.name}</h3>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <Info size={20} />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                  {test.description}
                </p>
                <div className="space-y-3 mb-6">
                   <div className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      <span className="font-semibold mr-1">Preparation:</span> {test.preparation}
                   </div>
                   <div className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                      <span className="font-semibold mr-1">TAT:</span> {test.turnaround}
                   </div>
                </div>
                <button
                  onClick={onBookClick}
                  className="w-full py-3 bg-gray-50 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book This Test</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl shadow-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Sparkles size={48} />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <MessageSquareText size={20} />
              </div>
              <h4 className="text-lg font-bold">Healthline AI Assistant</h4>
            </div>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Ask me anything about your lab tests or preparation requirements.
            </p>
            <div className="space-y-4">
              <textarea
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-white/50 outline-none focus:ring-1 focus:ring-white transition-all resize-none h-24"
                placeholder="How long should I fast for my Lipid Profile?"
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
              />
              <button
                onClick={handleAskAi}
                disabled={isLoadingAi || !aiQuestion}
                className="w-full py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoadingAi ? <Loader2 className="animate-spin" size={20} /> : <><Sparkles size={18} /> <span>Get AI Insight</span></>}
              </button>
            </div>
            {aiResponse && (
              <div className="mt-6 p-4 bg-white/10 rounded-2xl text-xs leading-relaxed border border-white/10 max-h-48 overflow-y-auto custom-scrollbar">
                <p>{aiResponse}</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4">Common Questions</h4>
            <div className="space-y-3">
              {[
                "Why is fasting necessary?",
                "What is TAT in labs?",
                "Are my results private?",
                "Do I need a referral?"
              ].map((q, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setAiQuestion(q)}
                  className="w-full text-left p-3 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestHub;
