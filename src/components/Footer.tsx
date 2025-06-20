
import { ArrowUp, Users } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a365d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#3182ce] to-[#63b3ed] bg-clip-text text-transparent">
                GowithSupport
              </span>
            </div>
            <p className="text-blue-200 text-sm">Your Strategic IT Partner</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#63b3ed] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#63b3ed] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#63b3ed] transition-colors">LinkedIn</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-[#3182ce] hover:bg-[#63b3ed] p-2 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 GowithSupport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
