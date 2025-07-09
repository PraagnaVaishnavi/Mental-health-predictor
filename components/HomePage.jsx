import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated background cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-20 bg-white/20 rounded-xl backdrop-blur-sm shadow-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-28 h-16 bg-emerald-100/30 rounded-lg backdrop-blur-sm shadow-md transform -rotate-6 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-64 left-32 w-24 h-32 bg-green-100/25 rounded-2xl backdrop-blur-sm shadow-lg transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-16 w-36 h-24 bg-teal-100/20 rounded-xl backdrop-blur-sm shadow-md transform -rotate-12 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-64 left-20 w-20 h-28 bg-white/15 rounded-lg backdrop-blur-sm shadow-lg transform rotate-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-28 bg-emerald-50/40 rounded-2xl backdrop-blur-sm shadow-xl transform -translate-x-1/2 -translate-y-1/2 rotate-6 animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-20 right-1/3 w-16 h-24 bg-green-200/25 rounded-xl backdrop-blur-sm shadow-md transform -rotate-45 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-20 bg-teal-50/30 rounded-lg backdrop-blur-sm shadow-lg transform rotate-20 animate-bounce" style={{ animationDelay: '1.8s' }}></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 p-6 shadow-2xl backdrop-blur-md border-b border-emerald-600/20 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              MentoKind
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={() => navigate('/about')}
            >
              About Us
            </button>
            <button
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="bg-gradient-to-r from-emerald-400 to-green-400 text-emerald-900 px-6 py-2 rounded-full hover:from-emerald-300 hover:to-green-300 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            Welcome to MentoKind
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the world around you. Answer questions and get to know more about your mental health.
          </p>
          <div className="flex justify-center space-x-6 pt-8">
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-500 hover:to-green-500 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Get Started
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-white text-2xl font-bold">L</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Learn Together</h3>
            <p className="text-gray-600 text-center">Join a community where learning is collaborative and supportive.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-white text-2xl font-bold">G</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Grow Kind</h3>
            <p className="text-gray-600 text-center">Develop not just skills, but also kindness and empathy in everything you do.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
