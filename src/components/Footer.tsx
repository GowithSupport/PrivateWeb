
import { ArrowUp, Users } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-emerald-600 via-sky-600 to-yellow-400 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-200 via-emerald-300 to-sky-300 rounded-full mr-3"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                GowithSupport
              </span>
            </div>
            <p className="text-yellow-100 text-sm">Your Strategic IT Partner</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-yellow-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-200 transition-colors">Terms of Service</a>
              <a href="https://www.linkedin.com/in/ali-rahimi-8a60255b/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors">LinkedIn</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-sky-500 hover:bg-yellow-400 p-2 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-emerald-400 mt-8 pt-8 text-center">
          <p className="text-yellow-100 text-sm">
            © 2024 GowithSupport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
