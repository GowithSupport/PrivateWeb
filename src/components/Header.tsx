
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7bca5113-69d0-46c6-ab38-9d173e9e8c81.png" 
              alt="Gowith Support Logo" 
              className="h-10 w-auto mr-3"
            />
            <div className="text-xl font-bold text-[#1a365d]">Gowith Support</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#3182ce] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#3182ce] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#3182ce] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-[#3182ce] transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#3182ce] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#3182ce] hover:bg-[#1a365d] text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-[#3182ce] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-[#3182ce] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-[#3182ce] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-700 hover:text-[#3182ce] transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#3182ce] transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#3182ce] hover:bg-[#1a365d] text-white w-full mt-4"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
