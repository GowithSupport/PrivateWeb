
import { CheckCircle, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-yellow-200 via-emerald-300 to-sky-300 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Transform Your IT Infrastructure with Strategic Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Sr. IT Executive & Consultant specializing in Cloud Migration, Cybersecurity, and Digital Transformation. 23+ years of proven results.
            </p>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-emerald-600 mr-3" size={20} />
                <span className="text-gray-800">AWS & Azure Cloud Migrations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-emerald-600 mr-3" size={20} />
                <span className="text-gray-800">SOC 2 & HIPAA Compliance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-emerald-600 mr-3" size={20} />
                <span className="text-gray-800">Cybersecurity Strategy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-emerald-600 mr-3" size={20} />
                <span className="text-gray-800">IT Infrastructure Modernization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg font-semibold">
                <Calendar className="mr-2" size={20} />
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-2 border-emerald-500 px-8 py-3 text-lg font-semibold bg-white hover:bg-emerald-50 text-emerald-700">
                <FileText className="mr-2" size={20} />
                View Case Studies
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/37bbd7ee-abfc-4af7-9207-d73ca4562832.png" 
              alt="Ali Rahimi - IT Executive" 
              className="rounded-2xl shadow-2xl w-full max-w-xs mx-auto animate-scale-in" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
