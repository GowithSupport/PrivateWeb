
import { Cloud, Shield, Server, Zap, Users, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Strategy',
      description: 'Complete AWS/Azure migrations, infrastructure modernization, cost optimization strategies, and 24-month migration planning.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'SOC 2 Type II implementation, HIPAA & HITRUST compliance, risk assessment & management, and security policy development.',
    },
    {
      icon: Server,
      title: 'IT Infrastructure Management',
      description: 'Network architecture design, system administration, vendor management, and performance optimization.',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'ERP implementation (NetSuite, Dynamics 365), business process automation, data warehousing & BI, technology roadmap planning.',
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'IT team structuring, process improvement (ITIL/Agile), staff training & mentoring, and project management.',
    },
    {
      icon: Database,
      title: 'Disaster Recovery & Business Continuity',
      description: 'High availability solutions, backup & recovery strategies, business continuity planning, and cloud failover implementation.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
            Comprehensive IT Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <service.icon className="text-[#3182ce] mb-6" size={48} />
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
