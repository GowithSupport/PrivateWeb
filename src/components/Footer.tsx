
import { ArrowUp, Zap } from 'lucide-react';

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
              <div className="flex flex-col items-center mr-3">
                <Zap className="h-6 w-6 text-[#3182ce] mb-1" />
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white bg-[#1a365d] px-2 py-1 rounded-l border border-white">Charge</span>
                  <span className="text-lg font-bold text-white bg-green-600 px-2 py-1 rounded-r border border-white">Trux</span>
                </div>
              </div>
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
            © 2024 ChargeTrux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
