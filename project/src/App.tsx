import React, { useState } from 'react';
import { Home, GraduationCap, FolderGit2, Mail, Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Trang Chủ', icon: Home },
    { id: 'education', name: 'Học Vấn', icon: GraduationCap },
    { id: 'projects', name: 'Dự Án', icon: FolderGit2 },
    { id: 'contact', name: 'Liên Hệ', icon: Mail },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Mobile menu button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out bg-gradient-to-b from-purple-600 to-indigo-700 shadow-lg w-64 p-6`}>
        <div className="space-y-8">
          <div className="text-2xl font-bold text-white">Portfolio</div>
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </nav>

      {/* Main content */}
      <main className={`transition-all duration-200 ease-in-out ${
        isMenuOpen ? 'md:ml-64' : 'md:ml-64'
      } min-h-screen`}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;