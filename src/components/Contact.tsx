
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    challenges: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. Ali will get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      challenges: '',
      timeline: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free IT assessment and discover how we can help modernize your technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-sky-600 mr-4" size={24} />
                <div>
                  <div className="font-semibold text-gray-800">Phone</div>
                  <div className="text-gray-600">949-769-4428</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-sky-600 mr-4" size={24} />
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600">arahimi@gowithsupport.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-sky-600 mr-4" size={24} />
                <div>
                  <div className="font-semibold text-gray-800">Location</div>
                  <div className="text-gray-600">Serving clients nationwide from Southern California</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Get Your Free IT Assessment Today</h4>
              <p className="text-sky-100">
                Schedule a consultation to discuss your IT challenges and discover opportunities for optimization and growth.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current IT Challenges</label>
                <Textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  rows={3}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                <Input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., Within 3 months, Q2 2024, etc."
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-sky-500 hover:bg-emerald-500 text-white py-3 text-lg font-semibold"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
